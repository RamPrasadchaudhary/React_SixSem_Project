import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createStaff = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create staff account
    const staffId = await User.createStaff({ name, email, password });

    res.status(201).json({
      success: true,
      message: "Staff account created successfully",
      staffId,
    });
  } catch (error) {
    console.error("Create staff error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllStaff = async (req, res) => {
  try {
    const staff = await User.getAllStaff();
    res.json(staff);
  } catch (error) {
    console.error("Get staff error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
