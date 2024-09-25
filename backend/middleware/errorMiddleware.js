//MIDDLEWARE FOR HANDLING ERRORS

//notFound: Middleware for handling routes that are not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//errorHandler: Middleware for handling errors
const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  //check for mogoose bad ObjectId

  if (error.name === "CastError" && error.kind === "ObjectId") {
    statusCode = 400;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};

export { notFound, errorHandler };
