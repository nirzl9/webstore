import SellerUser from "../models/sellerusermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

const tokenBlacklist = new Set();

export const sellerSignUp = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, phone, password, address } = req.body;

    const existingUser = await SellerUser.findOne({ phone });
    if (existingUser) {
      const error = new Error("Phone number already in use");
      error.status = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUsers = await SellerUser.create(
      [{ name, email, password: hashedPassword, phone, address }],
      { session },
    );
    const token = jwt.sign(
      { userId: newUsers[0]._id },
      process.env.JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      },
    );

    await session.commitTransaction();
    session.endSession();
    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      data: { token, user: newUsers[0] },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res
      .status(500)
      .json({ message: "Failed to sign up", error: error.message });
  }
};

export const sellerSignIn = async (req, res) => {
  try {
    const { email, password, phone } = req.body;

    const user = await SellerUser.findOne({ phone, email });
    if (!user) {
      const error = new Error("cannot find phone number or password");
      error.status = 401;
      throw error;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      const error = new Error("Invalid phone number or password");
      error.status = 401;
      throw error;
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      success: true,
      message: "User Signed In Successfully",
      data: { token, user },
    });
  } catch (error) {
    res.status(500).json({
      message: "cannot find phone number or password",
      error: error.message,
    });
  }
};

export const sellerSignOut = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token provided",
      });
    }

    try {
      jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    tokenBlacklist.add(token);

    res.status(200).json({
      success: true,
      message: "User signed out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sign out failed",
      error: error.message,
    });
  }
};
