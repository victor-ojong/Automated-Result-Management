const express = require("express");
const router = express.Router();
const protect = require("./../middleWare/protect");
const {
  lecturerdashboardView,
  resultUpload,
} = require("./../Controllers/lecturerController");

router.post("/upload", protect, resultUpload);
router.get("/resultUpload", protect, lecturerdashboardView);

module.exports = router;
