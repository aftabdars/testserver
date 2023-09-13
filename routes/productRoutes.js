const express = require('express');
const { getProducts, getProductsById, upload, placeOrderImg, addProduct } = require('../controllers/productController');
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', addProduct);
router.post('/orderplacedimg', upload.single('image'), placeOrderImg);

module.exports = router;

