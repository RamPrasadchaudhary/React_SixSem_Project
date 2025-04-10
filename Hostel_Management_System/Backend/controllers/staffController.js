const pool = require("../config/db");

const getAllStudents = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const {
      student_id,
      name,
      email,
      password,
      room_no,
      branch,
      contact,
      admission_date,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(`INSERT INTO students SET ?`, {
      student_id,
      name,
      email,
      password: hashedPassword,
      room_no,
      branch,
      contact,
      admission_date,
      created_by: req.user.id,
    });

    res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};
