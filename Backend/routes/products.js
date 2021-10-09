var express = require('express');
const router = express.Router();

const ProductController = require('../controllers/cProducts');

router.get('', ProductController.getProducts); /// definimos las rutas para productos en este caso
router.get('/:id',ProductController.getProductId);
router.post('',ProductController.addProduct);

module.exports =router;