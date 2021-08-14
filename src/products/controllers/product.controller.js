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
      return res.status(400).json({ message: valid?.error?.details });
    }

    const createdProduct = await productService.createProduct(productData);

    res.json({ product: createdProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @param {Request} req Express request type
 * @param {Response} res Express response type
 */
const getProduct = async (req, res) => {
  try {
    const productId = Number(req.params.productId);

    if (productId === NaN) {
      res.status(400).json({ message: "productId must be a number" });
    }

    const product = await productService.getProduct(productId);

    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
};
