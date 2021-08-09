const { createProductValidator } = require("../validators/product.validator");

/**
 * @param {Request} req Express request type
 * @param {Response} res Express response type
 */
const createProduct = (req, res) => {
  const productData = req.body.product;
  const valid =  createProductValidator(productData)
  res.json({valid})
};

module.exports = {
  createProduct
}