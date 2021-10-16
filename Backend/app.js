var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const ventasRoutes = require("./routes/ventas");
const categoriaRoutes = require("./routes/categoria");
const userRoutes = require("./routes/users");
const usuariosRoutes = require("./routes/usuarios");

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.wstj5.mongodb.net/QPies?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado");
  });

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
