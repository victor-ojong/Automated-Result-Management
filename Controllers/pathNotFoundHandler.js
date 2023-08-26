const pathNotFound = (req, res, next) => {
  console.log(req.originalUrl);
  return next({
    message: " this route is  not found",
    errCode: 404,
    isOperational: true,
  });
};

module.exports = pathNotFound;
