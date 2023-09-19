const express = require('express');
const buyController = require('../controllers/buyController');
const router = express.Router();
const ValidateAdmin = require('../middleware/ValidateAdmin')
// Ruta para realizar la compra de un producto. Requiere autenticación JWT de administrador.
router.post('/' ,ValidateAdmin.njwtAuth, buyController.comprarProducto,);


module.exports = router; 