const express = require('express');
const router = express.Router();

//API Product Controller
const productController = require('../controllers/productController');

//Product Router paths
router.post('/createProduct', productController.createProduct);
router.put('/updateProductPrice', productController.updateProductPrice);

module.exports = router;
