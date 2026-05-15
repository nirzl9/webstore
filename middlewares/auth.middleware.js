import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

// Middleware to verify JWT token
export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Middleware to check user roles
export const authorize =
  (...requiredRoles) =>
  (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!requiredRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden - Insufficient permissions" });
    }
    next();
  };

export default { authenticate, authorize };
