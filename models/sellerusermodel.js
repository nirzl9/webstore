import mongoose from "mongoose";

const sellerUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SellerUser = mongoose.model("SellerUser", sellerUserSchema);

export default SellerUser;
