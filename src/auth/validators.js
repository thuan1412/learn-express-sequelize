const Joi = require("joi");

/**
 * Validate signUp data
 * @param {NormalSignUp} signUpData
 * @returns {Joi.ValidationResult}
 */
const normalSignUpValidator = (signUpData) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().min(3).max(30).required(),
    password: Joi.string().min(8).max(30).required(),
  });
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  return schema.validate(signUpData, options);
};

/**
 * Validate login data
 * @param {NormalLogin} loginData
 * @returns {Joi.ValidationResult}
 */
const normalLoginValidator = (loginData) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(30).required(),
    password: Joi.string().min(8).max(30).required(),
  });
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  return schema.validate(loginData, options);
};

module.exports = {
  normalSignUpValidator,
  normalLoginValidator,
};
