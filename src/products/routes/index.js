const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/', productController.createProduct);
router.get('/:productId', productController.getProduct);

router.get('/', (req, res) => {
  res.json({ 1: 1 });
});

module.exports = router;
