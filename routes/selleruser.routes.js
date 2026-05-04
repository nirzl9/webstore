import { Router } from "express";
import {
  sellerSignUp,
  sellerSignIn,
  sellerSignOut,
} from "../controllers/selleruser.controller";

const selleruserRouter = Router();

selleruserRouter.post("/seller/sign-up", sellerSignUp);
selleruserRouter.post("/seller/sign-in", sellerSignIn);
selleruserRouter.post("/seller/sign-out", sellerSignOut);

export default selleruserRouter;
