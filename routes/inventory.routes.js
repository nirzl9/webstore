import { Router } from "express";
import {
  getInventories,
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller.js";

import { authorize, authenticate } from "../middlewares/auth.middleware.js";

const inventoryRouter = Router();

inventoryRouter.get("/", authenticate, authorize("seller"), getInventories);

inventoryRouter.post("/", authenticate, authorize("seller"), createInventory);

inventoryRouter.get("/:id", authenticate, authorize("seller"), getInventory);

inventoryRouter.put("/:id", authenticate, authorize("seller"), updateInventory);

inventoryRouter.delete(
  "/:id",
  authenticate,
  authorize("seller"),
  deleteInventory,
);

export default inventoryRouter;
