import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  cancelOrder,
  updateOrderStatus,
} from "../controllers/orders.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const ordersRouter = Router();

ordersRouter.get("/orders", authorize, getOrders);

ordersRouter.post("/orders", authorize, createOrder);

ordersRouter.get("/orders/:id", authorize, getOrderById);

ordersRouter.delete("/orders/:id", authorize, cancelOrder);

ordersRouter.get("/seller/orders", authorize, getOrders);

ordersRouter.get("/seller/orders/:id", authorize, getOrderById);

ordersRouter.delete("/seller/orders/:id", authorize, cancelOrder);

ordersRouter.put("/seller/orders/:id/status", authorize, updateOrderStatus);

export default ordersRouter;
