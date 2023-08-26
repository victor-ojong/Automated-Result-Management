const catchAsync = require("./../Utils/catchAsync");
const resultSummaryCalculator = require("./../Helpers/resultSummaryCalculator");
const gpaCalculator = require("./../Helpers/gpaCalculator");

exports.studentOverview = catchAsync(async (req, res, next) => {
  const student = req.user;
  const resultSummary = resultSummaryCalculator(student);
  //  calculating CGPA FOR ALL THE SEMESTERS using helpers
  student.cgpa = await gpaCalculator(resultSummary);
  student.save({ validateBeforeSave: false });
  res.status(200).render("studentOverview", {
    resultSummary,
    student,
  });
});

exports.displayResultSheet = catchAsync(async (req, res, next) => {
  const { semester, level } = req.query;

  // current logged in user
  const student = req.user;
  const results = student.results.filter(
    (el) => el.semester === semester && el.level === level
  );

  let sanitizedResults;
  if (results.at(0)) {
    sanitizedResults = results;
  }

  res.status(200).render("resultDisplay", { sanitizedResults });
});
