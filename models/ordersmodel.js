import mongoose, { skipMiddlewareFunction } from "mongoose";

const orderSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: [true, "Product name is required"],
  },

  category: {
    type: String,
    enum: ["tops", "bottoms", "shoes", "accessories"],
    required: [true, "category not defined "],
  },
  colour: {
    type: String,
  },

  size: {
    type: String,
    required: [true, "size is required"],
  },

  brand: {
    type: String,
  },

  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },

  sku: {
    type: String,
    required: [true, "SKU is required"],
    unique: true,
  },

  orderdate: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
