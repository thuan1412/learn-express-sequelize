const authServices = require("./services");

const login = (req, res) => {
  authServices.login()
};

const me = (req, res) => {
  console.log(req.user)
  res.json({me: 'me'})
};

const register = (req, res) => {
  const jwtToken = authServices.signUp({});
  res.json({ jwtToken });
};

module.exports = {
  register,
  login,
  me
};
