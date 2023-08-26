const resultSummary = (student) => {
  const resultSummary = [];
  // year one results
  const first_semester_ONE = student.results.filter(
    (el) => el.semester === "First" && el.level === "100L"
  );
  const second_semester_ONE = student.results.filter(
    (el) => el.semester === "Second" && el.level === "100L"
  );
  // year two results
  const first_semester_TWO = student.results.filter(
    (el) => el.semester === "First" && el.level === "200L"
  );
  const second_semester_TWO = student.results.filter(
    (el) => el.semester === "Second" && el.level === "200L"
  );
  // year three results
  const first_semester_THREE = student.results.filter(
    (el) => el.semester === "First" && el.level === "300L"
  );
  const second_semester_THREE = student.results.filter(
    (el) => el.semester === "Second" && el.level === "300L"
  );
  // year four results
  const first_semester_FOUR = student.results.filter(
    (el) => el.semester === "First" && el.level === "400L"
  );
  const second_semester_FOUR = student.results.filter(
    (el) => el.semester === "Second" && el.level === "400L"
  );

  // year five results
  const first_semester_FIVE = student.results.filter(
    (el) => el.semester === "First" && el.level === "500L"
  );
  const second_semester_FIVE = student.results.filter(
    (el) => el.semester === "Second" && el.level === "500L"
  );

  // year six result
  const first_semester_SIX = student.results.filter(
    (el) => el.semester === "First" && el.level === "600L"
  );
  const second_semester_SIX = student.results.filter(
    (el) => el.semester === "Second" && el.level === "600L"
  );

  // year seven result
  const first_semester_SEVEN = student.results.filter(
    (el) => el.semester === "First" && el.level === "700L"
  );
  const second_semester_SEVEN = student.results.filter(
    (el) => el.semester === "Second" && el.level === "700L"
  );

  // year eight result
  const first_semester_EIGHT = student.results.filter(
    (el) => el.semester === "First" && el.level === "800L"
  );
  const second_semester_EIGHT = student.results.filter(
    (el) => el.semester === "Second" && el.level === "800L"
  );

  // populating our result summary array if result exist for a semester and level
  const summaryCalculator = (resultArrayPerSemester) => {
    resultSummary.push({
      semester: resultArrayPerSemester.at(0).semester,
      level: resultArrayPerSemester.at(0).level,
      courses: resultArrayPerSemester.length,
      // calculating the total credit hours taken per semester
      creditHourTotal: resultArrayPerSemester
        .map((el) => el.creditUnit)
        .reduce((acc, cur) => acc + cur, 0),
      // calculating the total credit hours taken per semester
      creditPointsTotal: resultArrayPerSemester
        .map((el) => el.creditPoints)
        .reduce((acc, cur) => acc + cur, 0),
      gpa: (
        resultArrayPerSemester
          .map((el) => el.creditPoints)
          .reduce((acc, cur) => acc + cur, 0) /
        resultArrayPerSemester
          .map((el) => el.creditUnit)
          .reduce((acc, cur) => acc + cur, 0)
      ).toFixed(2),
    });
  };
  // calling the calculator function if results exist for each semester
  if (first_semester_ONE.length > 0) {
    summaryCalculator(first_semester_ONE);
  }
  if (second_semester_ONE.length > 0) {
    summaryCalculator(second_semester_ONE);
  }
  if (first_semester_TWO.length > 0) {
    summaryCalculator(first_semester_TWO);
  }
  if (second_semester_TWO.length > 0) {
    summaryCalculator(second_semester_TWO);
  }
  if (first_semester_THREE.length > 0) {
    summaryCalculator(first_semester_THREE);
  }
  if (second_semester_THREE.length > 0) {
    summaryCalculator(second_semester_THREE);
  }
  if (first_semester_FOUR.length > 0) {
    summaryCalculator(first_semester_FOUR);
  }
  if (second_semester_FOUR.length > 0) {
    summaryCalculator(second_semester_FOUR);
  }
  if (first_semester_FIVE.length > 0) {
    summaryCalculator(first_semester_FIVE);
  }
  if (second_semester_FIVE.length > 0) {
    summaryCalculator(second_semester_FIVE);
  }
  if (first_semester_SIX.length > 0) {
    summaryCalculator(first_semester_SIX);
  }
  if (second_semester_SIX.length > 0) {
    summaryCalculator(second_semester_SIX);
  }

  if (first_semester_SEVEN.length > 0) {
    summaryCalculator(first_semester_SEVEN);
  }
  if (second_semester_SEVEN.length > 0) {
    summaryCalculator(second_semester_SEVEN);
  }
  if (first_semester_EIGHT.length > 0) {
    summaryCalculator(first_semester_EIGHT);
  }
  if (second_semester_EIGHT.length > 0) {
    summaryCalculator(second_semester_EIGHT);
  }

  return resultSummary;
};

module.exports = resultSummary;
