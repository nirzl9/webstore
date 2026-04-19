import { express } from "express";

const ordersRouter = express.Router();

ordersRouter.get("/orders", (req, res) => {
  res.send("Get all the orders");
});

ordersRouter.post("/orders", (req, res) => {
  res.send("Create a new order");
});

ordersRouter.get("/orders/:id", (req, res) => {
  res.send(`Get order with ID: ${req.params.id}`);
});

export default ordersRouter;
