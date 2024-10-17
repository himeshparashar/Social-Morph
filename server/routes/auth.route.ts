import express from "express";
const authRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/middleware";

import {
  activateAccount,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller";
authRouter.post("/register", registerUser);
authRouter.post("/activateAccount", activateAccount);
authRouter.post("/login", loginUser);
authRouter.post("/logout", isAuthenticated, logoutUser);

export default authRouter;
