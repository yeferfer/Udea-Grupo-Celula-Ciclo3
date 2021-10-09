var express = require("express");
const routerV = express.Router();

const ventasController = require("../controllers/cVentas");

routerV.get("", ventasController.getVentas); /// definimos las rutas para usuarios en este caso
routerV.post("", ventasController.addVentas);
routerV.get("/:id", ventasController.getVentaId);

module.exports = routerV;
