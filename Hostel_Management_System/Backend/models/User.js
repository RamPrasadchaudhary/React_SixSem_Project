const pool = require("../config/db");

class User {
  static async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  static async create(userData) {
    const [result] = await pool.query("INSERT INTO users SET ?", [userData]);
    return result.insertId;
  }
}

module.exports = User;
