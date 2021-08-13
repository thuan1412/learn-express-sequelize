const jwt = require("jsonwebtoken");
require('./passport-config')

const sampleData = {
  name: "name",
  password: "password",
};

const signUp = (signUpData) => {
  // TODO: create user, save hash password to database
  return jwt.sign(sampleData, process.env.JWT_SECRET, {
    expiresIn: '30s'
  });
};

const login = (signInData) => {
  // TODO: verify sign in data

  // return the jwt token if the signData is valid
  return jwt.sign(sampleData, process.env.JWT_SECRET);
}

module.exports = {
  signUp,
  login
};
