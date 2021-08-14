require("./passport-config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { sequelize } = require("../sequelize");

const sampleData = {
  name: "name",
  password: "password",
};

/**
 * Create new user if the signUpData is valid
 * @param {NormalSignUp} signUpData
 * @returns
 */
const signUp = async (signUpData) => {
  const userModel = sequelize.models["users"];
  const exits = userModel.count({ where: { email: signUpData?.email } }) > 0;
  if (exits) {
    throw new Error("The current email is taken already");
  }
  const newUser = userModel.build();
  newUser.email = signUpData.email;
  newUser.password = await bcrypt.hash(
    signUpData.password,
    parseInt(process.env.HASH_SALT)
  );
  newUser.username = signUpData.username;
  newUser.signUpType = "normal";

  await newUser.save();

  return jwt.sign(sampleData, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

/**
 * Login
 * @param {NormalLoginData} loginData
 * @returns {string} jwt token
 */
const login = async (loginData) => {
  const userModel = sequelize.models["users"];
  const user = await userModel.findOne({ where: { email: loginData?.email } });
  console.log("asd", user);
  if (user) {
    const matched = await bcrypt.compare(loginData.password, user.password);
    if (matched) {
      return jwt.sign(sampleData, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
    } else {
      throw Error("User does not exist");
    }
  } else {
    throw Error("User does not exist");
  }
};

module.exports = {
  signUp,
  login,
};
