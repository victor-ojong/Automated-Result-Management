const jwt = require("jsonwebtoken");
const token = (userid) => {
  return jwt.sign({ id: userid }, "this-is-it-bro-we-must-work-hard");
};

module.exports = token;
