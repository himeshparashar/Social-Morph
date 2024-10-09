import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { TokenData } from "../interfaces/tokenInterface";
import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/ErrorHandler";
const prisma = new PrismaClient();

interface RequestWithUserId extends ExpressRequest {
  id: string;
  iat: number;
  exp: number;
}
export const isAuthenticated = async (
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
    if (user.id !== id && user.isVerified !== true) {
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
