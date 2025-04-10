const pool = require("../config/db");
const bcrypt = require("bcryptjs");

const getAllStudents = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT s.*, a.username AS created_by 
      FROM students s
      JOIN admins a ON s.admin_id = a.admin_id
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const addStudent = async (req, res) => {
  try {
    const {
      student_id,
      email,
      password,
      name,
      room_no,
      branch,
      contact,
      admission_date,
    } = req.body;

    // Validate required fields
    if (
      !student_id ||
      !email ||
      !password ||
      !name ||
      !room_no ||
      !branch ||
      !contact ||
      !admission_date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if student exists
    const [existing] = await pool.query(
      "SELECT student_id FROM students WHERE student_id = ? OR email = ?",
      [student_id, email]
    );

    if (existing.length > 0) {
      return res
        .status(400)
        .json({ error: "Student ID or email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await pool.query(`INSERT INTO students SET ?`, {
      student_id,
      admin_id: req.admin.id,
      email,
      password: hashedPassword,
      full_name: name,
      room_no,
      branch,
      contact,
      admission_date,
    });

    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllStudents, addStudent };
