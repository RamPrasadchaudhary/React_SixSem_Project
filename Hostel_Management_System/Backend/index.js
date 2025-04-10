const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables first
dotenv.config();

// Create Express app
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = require("./config/db");

// Test DB connection
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Connected to MySQL database");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

// Import routes
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hostel Management System API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
