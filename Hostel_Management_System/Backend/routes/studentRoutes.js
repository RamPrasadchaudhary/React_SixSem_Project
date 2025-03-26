const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware); // Protect all student routes

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);

module.exports = router;
