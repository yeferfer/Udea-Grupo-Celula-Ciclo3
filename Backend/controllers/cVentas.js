
const VentasRealizadas = require('../models/mVentas');

exports.getVentas = (req, res) => { /// Aca van todas las funciones a utilizar como la multiplicacion con postman q trabajamos y la conexion a la BD para
    VentasRealizadas.find().then((postResult) => {
        res.status(200).json(postResult);
    });



};

exports.addVentas = (req, res) => {
    const ventasAdd = new VentasRealizadas({
        Fecha_Venta: req.body.Fecha_Venta,
        Producto: req.body.Producto,
        Referencia: req.body.Referencia,
        Precio: req.body.Precio,
        Descripcion: req.body.Descripcion,
        Sucursal: req.body.Sucursal,
        Vendedor: req.body.Vendedor,
        Categoria: req.body.Categoria
    });

    ventasAdd.save().then((createdVenta) => {
        console.log(createdVenta);
        res.status(201).json("Venta registrada");
      });
    };

    exports.getVentaId = (req, res) => {
        VentasRealizadas.findById(req.params.id).then((ventaResult) => {
          if (ventaResult) {
            res.status(200).json(ventaResult);
          } else {
            res.status(404).json("Venta no encontrada");
          }
        });
      };