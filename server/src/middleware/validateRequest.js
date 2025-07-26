const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body); // validated + parsed input
    next();
  } catch (err) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: err.errors.map((e) => ({
        field: e.path[0],
        issue: e.message,
      })),
    });
  }
};

export default validate;
