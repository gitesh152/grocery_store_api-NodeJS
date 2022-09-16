//API Home Router
const express = require('express');
const router = express.Router(); //Creating Express Router Instance

//API Home Controller
const apiHomeController = require('../controllers/homeController');

router.get('/', apiHomeController.index);

//Router SubRoutes
router.use('/customer', require('./customer'));
router.use('/product', require('./product'));
router.use('/order', require('./order'));

module.exports = router;
