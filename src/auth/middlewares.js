const passport = require("passport");

const jwtMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (payload, valid, err) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }
    next();
  })(req, res, next);
};

module.exports = {
  jwtMiddleware,
};
