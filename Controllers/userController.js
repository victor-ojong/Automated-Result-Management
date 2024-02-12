const Lecturer = require("./../Models/lecturerModel");
const { json } = require("body-parser");
const catchAsync = require("./../Utils/catchAsync");
const roleChecker = require("./../Helpers/roleChecker");
const tokenGenerator = require("./../Utils/jwt");
const { passwordHash, passwordChecked } = require("../Helpers/passwordHash");

exports.viewLoginPage = catchAsync(async (req, res, next) => {
  res.status(200).render("login");
});

exports.userActivation = catchAsync(async (req, res, next) => {
  const { regno, email, password} = req.body;
  const { user } = roleChecker(regno);

  if (!user) {
    return next({
      message: "Incorrect Email/Id",
      errCode: 401,
      isOperational: true,
    });
  }

  if (user.email !== email) {
    return next({
      message: "Incorrect Email/Id",
      errCode: 401,
      isOperational: true,
    });
  }

  if (user.password) {
    return next({
      message: "This Account has already been activated",
      errCode: 402,
      isOperational: true,
    });
  } else {
    passwordHash(user, password);
  }

  const token = tokenGenerator(user._id);

  res.cookie("jwt", token);
  res.status(200).json({
    status: "success",
    message: "Account successfully activated",
    data: req.body,
  });
});

exports.userLogin = catchAsync(async (req, res, next) => {
  const { regno, password } = req.body;
  const { user, role } = await roleChecker(regno);

  const passwordCheck = await passwordChecked(password, user.password);

  if (!passwordCheck || !user) {
    return next({
      message: "Invalid Login details",
      errCode: 401,
      isOperational: true,
    });
  }

  const token = tokenGenerator(user._id);
  res.cookie("jwt", token, {
    expiresIn: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
  res.cookie("role", role);
  res.status(200).json({
    status: "success",
    role,
  });
});

exports.usersLogout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "fake-token", {
    expiresIn: new Date(Date.now() + 10 * 1000),
  });
  res.status(200).render("login");
});

exports.changePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, regno } = req.body;

  const { user } = roleChecker(regno);

  const verifyPassword = passwordChecked(currentPassword, user.password);
  if (!verifyPassword) {
    return next({
      message: "current password is not correct",
      errCode: 404,
      isOperational: true,
    });
  } else {
    passwordHash(user, newPassword);
  }

  res.status(202).json({
    status: "success",
    message: "password Updated successfully",
  });
});

exports.messageSender = catchAsync(async (req, res, next) => {

  const user = req.user;
  user.messages.push(req.body);
  user.save({ validateBeforeSave: false });

  const admin = await Lecturer.findOne({ courseCode: "GSS 1101" });
  admin.messages.push({
    message: req.body.message,
    time: req.body.time,
    regno: req.body.regno,
    flag: "reciever",
  });

  admin.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "message sent successfully",
  });
});
