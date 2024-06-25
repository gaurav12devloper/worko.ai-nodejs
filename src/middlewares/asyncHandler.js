// asyncHandler is a middleware that wraps around async functions to catch any errors and pass them to next middleware
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next); //catch any error and pass it to next, which will be handled by error middleware

export default asyncHandler;
