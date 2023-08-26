const express = require("express");
const {
  studentOverview,
  displayResultSheet,
} = require("./../Controllers/studentController");
const protect = require("./../middleWare/protect");

const router = express.Router();

router.route("/studentDashboard").get(protect, studentOverview);
router.route("/studentDash").get(protect, displayResultSheet);

module.exports = router;
