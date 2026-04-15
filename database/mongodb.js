import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Error: DB_URI is not defined in environment/development or production variables",
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
