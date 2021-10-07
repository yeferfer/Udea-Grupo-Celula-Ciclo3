var express = require('express');
const router = express.Router();


const ventasController = require('../controllers/cVentas');

router.get('',ventasController.getVentas) /// definimos las rutas para usuarios en este caso
router.post('')


module.exports =router;