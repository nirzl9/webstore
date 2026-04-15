import { mongoose } from "mongoose";

const inventorySchema = new mongoose.Schema({
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

  sku: {
    type: Number,
    unique: true,
    required: [true, "SKU number is required"],
  },

  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
