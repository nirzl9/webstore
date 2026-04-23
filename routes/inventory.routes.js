import { Router } from "express";
import {
  getInventories,
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller.js";

import authorize from "../middlewares/authorize.middleware.js";

const inventoryRouter = Router();

inventoryRouter.get("/seller/inventory", authorize, getInventories);

inventoryRouter.post("/seller/inventory", authorize, createInventory);

inventoryRouter.get("/seller/inventory/:id", authorize, getInventory);

inventoryRouter.put("/seller/inventory/:id", authorize, updateInventory);

inventoryRouter.delete("/seller/inventory/:id", authorize, deleteInventory);

export default inventoryRouter;
