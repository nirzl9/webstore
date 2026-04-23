import { mongoose } from "mongoose";

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

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Customer ID is required"],
  },

  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Seller ID is required"],
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

  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
});

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
