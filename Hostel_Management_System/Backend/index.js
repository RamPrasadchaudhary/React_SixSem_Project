require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "HostelManagementSystem",
  password: process.env.DB_PASSWORD || "Password@068",
  database: process.env.DB_NAME || "HMS",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Validate input
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check user exists
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // Verify role matches
    if (user.role !== role) {
      return res.status(403).json({ message: "Access denied for this role" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      token,
      role: user.role,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin dashboard endpoints

// Get current user info
app.get("/api/current-user", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [users] = await pool.query("SELECT * FROM users WHERE id = ?", [
      decoded.id,
    ]);

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Current user error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all users (admin only)
app.get("/api/users", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const [users] = await pool.query("SELECT id, name, email, role FROM users");
    res.json(users);
  } catch (error) {
    console.error("Users list error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get dashboard statistics (admin only)
app.get("/api/dashboard-stats", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Get counts for each user type
    const [totalUsers] = await pool.query(
      "SELECT COUNT(*) as count FROM users"
    );
    const [students] = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE role = 'student'"
    );
    const [staff] = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE role = 'staff'"
    );
    const [wardens] = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE role = 'warden'"
    );
    const [maintenance] = await pool.query(
      "SELECT COUNT(*) as count FROM maintenance_requests"
    );

    res.json({
      totalUsers: totalUsers[0].count,
      students: students[0].count,
      staff: staff[0].count,
      wardens: wardens[0].count,
      maintenance: maintenance[0].count,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
