const Student = require("./../Models/studentModel");
const catchAsync = require("./../Utils/catchAsync");

exports.lecturerdashboardView = catchAsync(async (req, res, next) => {
  const lecturer = req.user;
  res.status(200).render("lecturerview", { lecturer });
});

exports.resultUpload = catchAsync(async (req, res, next) => {
  const regno = req.body.regno;

  const student = await Student.findOne({ regno });

  if (!student) {
    return next({
      message: "this regno is not associated with any student please verify",
      errCode: 404,
      isOperational: true,
    });
  }
  const resultExist = student.results.find(
    (el) => el.courseCode === courseCode
  );

  if (resultExist) {
    return next({
      message: "this result has already been uploaded",
      errCode: 401,
      isOperational: true,
    });
  }
  student.results.push(req.body);

  // student.save({ validateModifiedOnly: true });
  student.save({ validateBeforeSave: false });
  console.log("result uploaded successfully");
  res.status(200).json({
    status: "success",
    message: "result uploaded successfully",
  });
});
