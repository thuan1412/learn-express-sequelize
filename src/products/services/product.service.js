const { sequelize } = require('../../sequelize');

/**
 * Create products
 * TODO: I think the DTO should be in the controller
 * @param {CreateProductDTO} createProductDto
 */
const createProduct = async (createProductDto) => {
  const productModel = sequelize.models.products;
  const productData = await productModel.create(createProductDto);
  return productData;
};

/**
 * Get a product by id
 * @param {number} productId Identify of the product
 * @returns Product data
 */
const getProduct = async (productId) => {
  const productModel = sequelize.models.products;
  const productData = await productModel.findByPk(productId);
  return productData;
};

module.exports = {
  createProduct,
  getProduct,
};
