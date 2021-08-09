const Joi = require("joi");

const createProductValidator = (productData) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    price: Joi.number().greater(0).required(),
    comparePrice: Joi.number().optional(),
    description: Joi.string().optional(),
  });
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  return schema.validate(productData, options)
};

module.exports = {
  createProductValidator,
};
