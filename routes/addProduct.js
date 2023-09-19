const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
const validateAdmin = require('../middleware/ValidateAdmin');

router.post('/', validateAdmin.njwtAuth, productController.addProduct );

module.exports = router; 