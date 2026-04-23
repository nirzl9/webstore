import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/login", signIn);

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-out", signOut);

userRouter.post("/seller/login", signIn);

userRouter.post("/seller/sign-up", signUp);

userRouter.post("/seller/sign-out", signOut);

export default userRouter;
