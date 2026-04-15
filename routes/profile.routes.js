import { Router } from "express";
import {
  getprofile,
  updateprofile,
  deleteprofile,
  createprofile,
} from "../controllers/profile.controller.js";

import authorize from "../middlewares/auth.middleware.js";

const profileRouter = Router();

profileRouter.get("/:id", authorize, getprofile);

profileRouter.post("/", authorize, createprofile);

profileRouter.put("/:id", authorize, updateprofile);

profileRouter.delete("/:id", authorize, deleteprofile);

export default profileRouter;
