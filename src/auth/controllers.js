const authServices = require('./services');
const authValidators = require('./validators');

const login = async (req, res) => {
  try {
    const loginData = req.body.user;

    const valid = authValidators.normalLoginValidator(loginData);

    if (valid.error) {
      return res.status(400).json({ message: valid?.error?.details });
    }
    const jwtToken = await authServices.login(loginData);

    console.log(loginData);
    return res.json({ token: jwtToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const me = (req, res) => {
  console.log(req.user);
  res.json({ me: 'me' });
};

const register = async (req, res) => {
  try {
    const signUpData = req.body.user;
    const valid = authValidators.normalSignUpValidator(signUpData);

    if (valid.error) {
      return res.status(400).json({ message: valid?.error?.details });
    }

    const jwtToken = await authServices.signUp(signUpData);
    return res.json({ token: jwtToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  me,
};
