import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import ejs from "ejs";
import bcrypt from "bcryptjs";
import path from "path";
import sendEmail from "../utils/sendMail";
import cloudinary from "cloudinary";
import { sendToken } from "../utils/jwt";
import { redis } from "../utils/redis";
import { IUser } from "../interfaces/userInterface";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
require("dotenv").config();
//register
interface IRegistrationBody {
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

export const registerUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = req.body;
      const existEmail = await prisma.user.findUnique({
        where: { email },
      });
      console.log("existEmail:", existEmail);
      if (existEmail) {
        return next(new ErrorHandler("Email already exists", 400));
      }
      const user: IRegistrationBody = {
        username,
        email,
        password,
      };
      const activationToken = createActivationToken(user as any);

      const activationCode = activationToken.activationCode;
      const data = { user: { username: user.username }, activationCode };
      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/activation-mail.ejs"),
        data
      );
      try {
        await sendEmail({
          email: user.email,
          subject: "Account Activation",
          template: "activation-mail.ejs",
          data,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email: ${user.email} to activate your account`,
          activationToken: activationToken.token,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);

interface IactivationToken {
  token: string;
  activationCode: string;
}
export const createActivationToken = (user: IUser): IactivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    { user, activationCode },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "1h",
    }
  );
  console.log("hahabro");
  return { token, activationCode };
};

interface IActivationRequest {
  activation_token: string;
  activation_code: string;
}
export const activateAccount = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { activation_token, activation_code } =
        req.body as IActivationRequest;
      const newUser: { user: IUser; activationCode: string } = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET as string
      ) as { user: IUser; activationCode: string };

      if (newUser.activationCode !== activation_code) {
        return next(new ErrorHandler("Invalid activation code", 400));
      }
      const { username, email, password } = newUser.user;

      const name = username;
      const userExists = await prisma.user.findUnique({
        where: { email },
      });
      if (userExists) {
        return next(new ErrorHandler("Email already exists", 400));
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await prisma.user.create({
          data: { name, email, password: hash },
        });
      }
      res.status(201).json({
        success: true,
        message: "Account activated successfully",
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);

// user login
interface IloginRequest {
  email: string;
  password: string;
}
export const loginUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body as IloginRequest; // Assuming you have an interface for the request body
      console.log(email, password);

      // Check for missing fields
      if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
      }

      // Find user by email and include password
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          // Select specific fields
          id: true,
          email: true,
          password: true,
        },
      });
      console.log(user);

      // Check if user exists
      if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }

      // Compare password with the hashed password in the database
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }

      // Send token to the client
      sendToken(user, 200, res); // You might want to adjust this based on your sendToken implementation
    } catch (error: any) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);

export const logoutUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.cookie("access_token", "", { maxAge: 1 });
      res.cookie("refresh_token", "", { maxAge: 1 });
      const userId: any = req.user?.id || "";
      await redis.del(userId, (err: any, value: any) => {
        if (err) {
          console.log("is this an error:", err);
        }
        console.log("what value really:", value);
      });
      console.log("anotherRedis", await redis.get(userId));
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);