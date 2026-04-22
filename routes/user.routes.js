import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/user.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const userRouter = Router();

userRouter.post("/login", authorize, signIn);

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-out", authorize, signOut);

export default userRouter;
