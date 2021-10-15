var express = require("express");
const router = express.Router();

const ventasController = require("../controllers/cVentas");

router.get("", ventasController.getVentas);
router.post("", ventasController.addVentas);
router.delete("/:id", ventasController.deleteVentas);
router.get("/:id", ventasController.getVentaId);
router.patch("/:id", ventasController.updateVentasById);

module.exports = router;
