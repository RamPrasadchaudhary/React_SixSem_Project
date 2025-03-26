const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

router.use(authMiddleware);
router.use(adminMiddleware);

router.get("/students", staffController.getAllStudents);
router.post("/students", staffController.createStudent);

module.exports = router;
