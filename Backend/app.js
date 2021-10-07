var express = require('express');
var app = express(); 

const productsRoutes = require("./routes/products")
const ventasRoutes = require("./routes/products")
const usuariosRoutes = require("./routes/products")

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));


app.use("/api/products", productsRoutes)
app.use("/api/ventas", ventasRoutes)
app.use("/api/usuarios", usuariosRoutes)

module.exports = app;
