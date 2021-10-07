const mongoose = require("mongoose");

const ventasrealizadas = mongoose.Schema({
    Fecha_Venta: { type: String, required: true },
    Producto: { type: String },
    Referencia: { type: Number, required: true },
    Precio: { type: Number, required: true },
    Descripcion: { type: String },
    Sucursal: { type: String, required: true },
    Vendedor: { type: String, required: true },
    Categoria: { type: String, required: true },
    
});

module.exports = mongoose.model("ventasRealizadas", ventasrealizadas);

