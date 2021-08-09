const { Request, Response } = require("express");

const { createProductValidator } = require("../validators/product.validator");
const productService = require("../services/product.service");

/**
 * @param {Request} req Express request type
 * @param {Response} res Express response type
 */
const createProduct = async (req, res) => {
  try {
    const productData = req.body.product;
    const valid = createProductValidator(productData);

    if (valid.error) {
      res.status(400).json({ message: valid?.error?.details });
      return;
    }

    const createdProduct = await productService.createProduct(productData);

    res.json({ createdProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
};
