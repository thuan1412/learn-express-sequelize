const { sequelize } = require('../../sequelize');

/**
 * Create products
 * TODO: I think the DTO should be in the controller
 * @param {CreateProductDTO} createProductDto
 */
const createProduct = async (createProductDto) => {
  const productModel = sequelize.models.products;
  return productModel.create(createProductDto);
};

/**
 * Get a product by id
 * @param {number} productId Identify of the product
 * @returns Product data
 */
const getProduct = async (productId) => {
  const productModel = sequelize.models.products;
  return productModel.findByPk(productId);
};

module.exports = {
  createProduct,
  getProduct,
};
