const globalErrorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.isOperational) {
    res.status(err.errCode).json({
      status: "failed",
      message: err.message,
    });
  }
  if (!err.isOperational) {
    res.status(404).json({
      status: "failed",
      message: "something went wrong",
    });
  }
};
module.exports = globalErrorHandler;
