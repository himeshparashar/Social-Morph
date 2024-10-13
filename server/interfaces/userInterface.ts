import { Document } from "mongoose";
export interface IUser extends Document {
  username: string;
  email: string;
  _id: string;
  password: string;
  cpassword: string;
  role: string;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
  signAccessToken: () => string;
  signRefreshToken: () => string;
}
