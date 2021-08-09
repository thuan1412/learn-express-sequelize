const Ajv = require("ajv");

const ajv = new Ajv();

const createProductValidator = ajv.compile({
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 5,
      maxLength: 50,
    },
  },
});


module.exports = { 
  createProductValidator
}