import db from "../config/db.js";

const User = {
  findByEmail: async (email) => {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      return rows;
    } catch (error) {
      console.error("Database error in findByEmail:", error);
      throw error;
    } //for error
  },

  create: async (userData) => {
    try {
      const [result] = await db.query("INSERT INTO users SET ?", [userData]);
      return result.insertId;
    } catch (error) {
      console.error("Database error in create:", error);
      throw error;
    }
  },

  // Add these new methods
  getAllStaff: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM users WHERE role = "staff"');
      return rows;
    } catch (error) {
      console.error("Database error in getAllStaff:", error);
      throw error;
    }
  },

  createStaff: async (staffData) => {
    try {
      const hashedPassword = await bcrypt.hash(staffData.password, 10);
      const [result] = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, "staff")',
        [staffData.name, staffData.email, hashedPassword]
      );
      return result.insertId;
    } catch (error) {
      console.error("Database error in createStaff:", error);
      throw error;
    }
  },
};

export default User;
