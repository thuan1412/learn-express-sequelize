const { sequelize } = require("../../sequelize");

/**
 * Create products
 * @param {CreateProductDTO} createProductDto 
 */
const createProduct = (createProductDto) => {
  const productModel = sequelize.models['products']
  console.log(createProductDto);
}