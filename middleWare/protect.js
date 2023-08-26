const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const Student = require("./../Models/studentModel");
const Lecturer = require("./../Models/lecturerModel");
const catchAsync = require("./../Utils/catchAsync");

const protect = catchAsync(async (req, res, next) => {
  let user;
  const role = req.cookies.role;
  const token = req.cookies.jwt;
  if (!token || token.length < 12) {
    return next({
      message: "You are not Logged In",
      errCode: 401,
      isOperational: true,
    });
  }
  //verifying the token
  const decoded = await promisify(jwt.verify)(
    token,
    "this-is-it-bro-we-must-work-hard"
  );

  const { id, exp, iat } = decoded;

  user =
    role === "student"
      ? await Student.findById(id)
      : await Lecturer.findById(id);

  if (!user) {
    return next({
      message: "You are not Logged In yet",
      errCode: 401,
      isOperational: true,
    });
  }
  req.user = user;
  console.log(req.user);
  next();
});
module.exports = protect;
