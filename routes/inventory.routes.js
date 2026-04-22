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

inventoryRouter.get("/inventory", authorize, getInventories);

inventoryRouter.post("/inventory", authorize, createInventory);

inventoryRouter.get("/inventory/:id", authorize, getInventory);

inventoryRouter.put("/inventory/:id", authorize, updateInventory);

inventoryRouter.delete("/inventory/:id", authorize, deleteInventory);

export default inventoryRouter;
