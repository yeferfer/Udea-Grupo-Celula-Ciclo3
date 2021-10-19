//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./home/pages/Home";
import Carrito from "./carrito/pages/Carrito";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import GestorProductos from "./productos/pages/Gestion";
import EditarProducto from "./productos/pages/EditarProducto";
import ProductosDisponibles from "./productos/pages/ProductosDisponibles";
import SistemaVentas from "./ventas/pages/SistemaVentas";
import VentasRealizadas from "./ventas/pages/VentasRealizadas";
import Usuarios from "./usuarios/pages/Usuarios";
import TablaGestorUsuario from "./usuarios/pages/TablaGestorUsuario";
import CrearUsuario from "./usuarios/pages/CrearUsuario";
import api from "./api";
import { useEffect } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Header
        isLoggedIn={logged}
        login={setLogged}
        cantCarrito={carrito.reduce(
          (total, producto) => total + producto.cantidad,
          0
        )}
      />
      <Switch>
        <Route path="/" exact>
          <Home
            isLoggedIn={logged}
            carrito={carrito}
            setCarrito={setCarrito}
            productos={productos}
            ventas={ventas}
          />
        </Route>

        <Route path="/Carrito" exact>
          <Carrito carrito={carrito} setCarrito={setCarrito} />
        </Route>

        <Route path="/CrearProducto">
          <CrearProducto productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/Gestion" exact>
          <GestorProductos productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/Gestion/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </Route>

        <Route path="/SistemaVentas" exact>
          <SistemaVentas ventas={ventas} setsistemaVentas={setVentas} />
        </Route>

        <Route path="/VentasRealizadas" exact>
          <VentasRealizadas ventas={ventas} setsistemaVentas={setVentas} />
        </Route>

        <Route path="/VentasRealizadas/Edit/:ventasId" exact>
          <VentasRealizadas ventas={ventas} setVentas={setVentas} />
        </Route>

        <Route path="/ProductosDisponibles" exact>
          <ProductosDisponibles />
        </Route>

        <Route path="/Usuarios" exact>
          <Usuarios />
        </Route>

        <Route path="/TablaGestorUsuario" exact>
          <TablaGestorUsuario />
        </Route>

        <Route path="/CrearUsuario" exact>
          <CrearUsuario />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
