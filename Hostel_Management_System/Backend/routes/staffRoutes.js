import express from "express";
import { createStaff, getAllStaff } from "../controllers/staffController.js";
import authMiddleware from "../middleware/authMiddleware.js";
// Add this with other imports
import staffRoutes from "./routes/staffRoutes.js";

// Add this with other route middleware
app.use("/api/staff", staffRoutes);
const router = express.Router();

// Only admin can access these routes
router.post("/", authMiddleware, createStaff);
router.get("/", authMiddleware, getAllStaff);

export default router;
