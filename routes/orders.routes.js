import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  cancelOrder,
  updateOrderStatus,
} from "../controllers/orders.controller.js";
import { authorize, authenticate } from "../middlewares/auth.middleware.js";

const ordersRouter = Router();

// Customer routes

ordersRouter.get("/", authenticate, authorize("customer"), getOrders);

ordersRouter.post("/", authenticate, authorize("customer"), createOrder);

ordersRouter.get("/:id", authenticate, authorize("customer"), getOrderById);

ordersRouter.delete("/:id", authenticate, authorize("customer"), cancelOrder);

// Seller routes

ordersRouter.get("/seller", authenticate, authorize("seller"), getOrders);

ordersRouter.get(
  "/seller/:id",
  authenticate,
  authorize("seller"),
  getOrderById,
);

ordersRouter.delete(
  "/seller/:id",
  authenticate,
  authorize("seller"),
  cancelOrder,
);

ordersRouter.put(
  "/seller/:id/status",
  authenticate,
  authorize("seller"),
  updateOrderStatus,
);

export default ordersRouter;
