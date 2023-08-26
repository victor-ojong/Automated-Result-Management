const express = require("express");
const router = express.Router();
const protect = require("./../middleWare/protect");
const {
  userActivation,
  userLogin,
  usersLogout,
  changePassword,
  messageSender,
} = require("./../Controllers/userController");

router.post("/activate", userActivation);
router.post("/login", userLogin);
router.post("/messageSend", protect, messageSender);
router.patch("/passwordUpdate", protect, changePassword);
router.get("/logout", protect, usersLogout);

module.exports = router;
