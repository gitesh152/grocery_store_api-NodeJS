const express = require('express');
const router = express.Router();

//API Order Controller
const orderController = require('../controllers/orderController');

//Order Router paths
router.post('/createOrder', orderController.createOrder);

module.exports = router;
