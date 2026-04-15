import { Router } from "express";
import {
  getInventories,
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller.js";

import authoriize from "../middlewares/auth.middleware.js";

const inventoryRouter = Router();

inventoryRouter.get("/inventory", authoriize, getInventories);

inventoryRouter.post("/inventory", authoriize, createInventory);

inventoryRouter.get("/inventory/:id", authoriize, getInventory);

inventoryRouter.put("/inventory/:id", authoriize, updateInventory);

inventoryRouter.delete("/inventory/:id", authoriize, deleteInventory);

export default inventoryRouter;
