import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import profileRouter from "./routes/profile.routes.js";
import ordersRouter from "./routes/orders.routes.js";
import connectDB from "./database/mongodb.js";

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(ordersRouter);
app.use(inventoryRouter);
app.use(profileRouter);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/orders", ordersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Clothing Store API");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectDB();
});
