import { Router } from "express";
import {
  getprofile,
  updateprofile,
  deleteprofile,
  createprofile,
} from "../controllers/profile.controller.js";

import { authorize, authenticate } from "../middlewares/auth.middleware.js";

const profileRouter = Router();

profileRouter.get("/:id", authenticate, authorize("customer"), getprofile);

profileRouter.post("/", authenticate, authorize("customer"), createprofile);

profileRouter.put("/:id", authenticate, authorize("customer"), updateprofile);

profileRouter.delete(
  "/:id",
  authenticate,
  authorize("customer"),
  deleteprofile,
);

export default profileRouter;
