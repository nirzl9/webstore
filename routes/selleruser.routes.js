import { Router } from "express";
import {
  sellerSignUp,
  sellerSignIn,
  sellerSignOut,
} from "../controllers/selleruser.controller.js";

const selleruserRouter = Router();

selleruserRouter.post("/sign-up", sellerSignUp);

selleruserRouter.post("/sign-in", sellerSignIn);

selleruserRouter.post("/sign-out", sellerSignOut);

export default selleruserRouter;
