require("dotenv").config();
import { Response } from "express";

import { redis } from "./redis";
import { IUser } from "../interfaces/userInterface";
interface ITokenOptions {
  expiresIn: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

const accessTokenExpire = parseInt(
  process.env.ACCESS_TOKEN_EXPIRE || "300",
  10
);
const refreshTokenExpire = parseInt(
  process.env.REFRESH_TOKEN_EXPIRE || "3540",
  10
);

//cookie optiosn
export const accessTokenOptions: ITokenOptions = {
  expiresIn: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
  maxAge: accessTokenExpire * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};
export const refreshTokenOptions: ITokenOptions = {
  expiresIn: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
  maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};
import jwt from "jsonwebtoken";

const signAccessToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN as string, {
    expiresIn: "5m",
  });
};

const signRefreshToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN as string, {
    expiresIn: "7d",
  });
};

export const sendToken = (user: IUser, statusCode: number, res: Response) => {
  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);
  // upload the login session to redis
  redis.set(user.id, JSON.stringify(user as any));

  // parsing env  vars

  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
    refreshTokenOptions.secure = true;
  }

  // set the cookies
  setTimeout(() => {
    res.cookie("accessToken", accessToken, accessTokenOptions);
    res.cookie("refreshToken", refreshToken, refreshTokenOptions);
    res.status(statusCode).json({
      success: true,
      user,
      accessToken,
    });
  }, 1900);
};
