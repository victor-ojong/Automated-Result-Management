const Lecturer = require("./../Models/lecturerModel");
const Student = require("./../Models/studentModel");

const roleChecker = async (regno) => {
  const role = regno.split("/").at(1) === "EEN" ? "student" : "lecturer";
  let user;

  if (role === "student") {
    user = await Student.findOne({ regno });
  }
  if (role === "lecturer") {
    user = await Lecturer.findOne({ courseCode: regno });
  }

  return { user: user, role: role };
};
module.exports = roleChecker;
