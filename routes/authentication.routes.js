import { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
} from "../controllers/authentication.controller.js";
import { authorize, authenticate } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/login", signIn);

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-out", authenticate, authorize("customer"), signOut);

export default userRouter;
