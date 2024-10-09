import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import config from "../config/config";
import { TokenData } from "../interfaces/tokenInterface";
import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "./catchAsyncErrors";
import { redis } from "../utils/redis";
const prisma = new PrismaClient();

interface RequestWithUserId extends ExpressRequest {
  id: string;
  iat: number;
  exp: number;
}
export const isAuthenticated = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.accessToken;

    // Check if the access token is present
    if (!access_token) {
      return next(new ErrorHandler("Login first to access this resource", 400));
    }

    try {
      // Ensure the ACCESS_TOKEN environment variable is set
      if (!process.env.ACCESS_TOKEN) {
        console.log("ACCESS_TOKEN environment variable is not set");
        return next(new ErrorHandler("Server configuration error", 500));
      }

      // Verify the token
      const decoded = jwt.verify(
        access_token,
        process.env.ACCESS_TOKEN as string
      ) as JwtPayload;
      console.log("decided", decoded);

      // Check if the token is decoded correctly
      if (!decoded || !decoded.id) {
        return next(new ErrorHandler("Access token is invalid.", 400));
      }

      // Fetch user data from Redis
      const user = await redis.get(decoded.id);
      console.log("user:", user);

      // Check if the user is found
      if (!user) {
        return next(
          new ErrorHandler("Please Login to access this resource", 404)
        );
      }

      // Attach user information to the request object
      req.user = JSON.parse(user); // Assuming the user data is stored as a JSON string in Redis
      next();
    } catch (error: any) {
      if (error instanceof TokenExpiredError) {
        console.error("Token expired:", error);
        return res.status(401).json({
          success: false,
          message:
            "Access token has expired. Please log in again to get a new token.",
        });
      } else {
        console.error("Error during token verification:", error);
        return res.status(401).json({
          success: false,
          message: "Login first to access this resource",
          error: error.message,
        });
      }
    }
  }
);

export const protectAdmin = async (
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as TokenData;
    const id = decoded._id;
    const user = await prisma.user.findUnique({ where: { id } });
    if (user.id !== id || user.isVerified !== true || user.role !== "ADMIN") {
      throw new Error("Unauthorized: No token provided");
    }
    req.id = user.id;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role || "")) {
      return next(
        new ErrorHandler(
          `Role (${req.user?.role}) is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
