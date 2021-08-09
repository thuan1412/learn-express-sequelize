const { sequelize } = require("../../sequelize");

/**
 * Create products
 * @param {CreateProductDTO} createProductDto 
 */
const createProduct = async (createProductDto) => {
  const productModel = sequelize.models['products']
  const productData = await productModel.create(createProductDto)
  return productData;
}

module.exports = {
  createProduct
}