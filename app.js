import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import profileRouter from "./routes/profile.routes.js";
import connectDB from "./database/mongodb.js";

const app = express();
app.use(express.json());
app.use(authRouter);
app.use(inventoryRouter);
app.use(profileRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/users", profileRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectDB();
});
