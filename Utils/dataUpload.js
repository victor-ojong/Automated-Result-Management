const fs = require("fs");
const Student = require("./../Models/studentModel");
const Lecturer = require("./../Models/lecturerModel");

//  reading the files from database
const lecturerData = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/lecturerData.json`)
);
const studentData = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/studentsData.json`)
);

const studentDataUpload = async (data) => {
  await Student.create(data, { validateBeforeSave: false });
  console.log("student data succesfully upploaded to the db");
};
// studentDataUpload(studentData);

const lecturerDataUpload = async (data) => {
  await Lecturer.create(data, { validateBeforeSave: false });
  console.log("lectuer data succesfully upploaded to the db");
};
// lecturerDataUpload(lecturerData);
