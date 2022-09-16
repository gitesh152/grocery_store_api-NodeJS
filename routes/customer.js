const express = require('express');
const router = express.Router();

//API Customer Controller
const customerController = require('../controllers/customerController');

//Customer Router paths
router.post('/createCustomer', customerController.createCustomer);
router.get('/getCustomers', customerController.getCustomers);
router.get('/getCustomerOrdersById', customerController.getCustomerOrders);
router.get(
  '/getCustomerWithMaxOrdersInAYear',
  customerController.getCustomerWithMaxOrdersInAYear
);

module.exports = router;
