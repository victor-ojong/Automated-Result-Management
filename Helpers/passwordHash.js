const bcrypt = require("bcrypt");

exports.passwordHash = async (user, newPassword) => {
  user.password = await bcrypt.hash(newPassword, 12);
  user.save({ validateBeforeSave: false });
};

exports.passwordChecked = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};
