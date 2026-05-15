import { Router } from "express";
import {
  sellerSignUp,
  sellerSignIn,
  sellerSignOut,
} from "../controllers/selleruser.controller.js";
import { authorize, authenticate } from "../middlewares/auth.middleware.js";

const selleruserRouter = Router();

selleruserRouter.post(
  "/sign-up",
  authenticate,
  authorize("seller"),
  sellerSignUp,
);

selleruserRouter.post(
  "/sign-in",
  authenticate,
  authorize("seller"),
  sellerSignIn,
);

selleruserRouter.post(
  "/sign-out",
  authenticate,
  authorize("seller"),
  sellerSignOut,
);

export default selleruserRouter;
