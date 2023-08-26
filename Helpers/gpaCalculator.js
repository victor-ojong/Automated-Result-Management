const gpaCalculator = (resultSummary) => {
  // CGPA = sum of grade points / credit units
  let CGPA = 5.0;
  if (resultSummary.length > 0) {
    const total_credit_Points = resultSummary
      .map((el) => el.creditPointsTotal)
      .reduce((acc, cur) => acc + cur, 0);

    const total_credit_Units = resultSummary
      .map((el) => el.creditHourTotal)
      .reduce((acc, cur) => acc + cur, 0);

    CGPA = (total_credit_Points / total_credit_Units).toFixed(2);
  }
  return CGPA;
};
module.exports = gpaCalculator;
