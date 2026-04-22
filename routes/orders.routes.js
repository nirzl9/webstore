import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  cancelOrder,
} from "../controllers/orders.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const ordersRouter = Router();

ordersRouter.get("/orders", authorize, getOrders);

ordersRouter.post("/orders", authorize, createOrder);

ordersRouter.get("/orders/:id", authorize, getOrderById);

ordersRouter.delete("/orders/:id", authorize, cancelOrder);

export default ordersRouter;
