var express = require('express');
const router = express.Router();


const userController = require('../controllers/cUsuarios');

router.get('',userController.getUsuarios) /// definimos las rutas para usuarios en este caso
router.post('')


module.exports =router;