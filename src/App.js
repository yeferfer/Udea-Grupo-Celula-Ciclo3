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
import SistemaVentas from "./ventas/pages/SistemaVentas";
import VentasRealizadas from "./ventas/pages/VentasRealizadas";
import Header from "./shared/Header";
import GestorProductos from "./productos/pages/GestorProductos";
import ProductosDisponibles from "./productos/pages/ProductosDisponibles";



function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [ventasrealizadas, setventasrealizadas] = useState([]); 
  const [sistemaVentas, setsistemaVentas] = useState([]);
  

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
          <Home isLoggedIn={logged} carrito={carrito} setCarrito={setCarrito} />
        </Route>

        <Route path="/" exact>
          <Home isLoggedIn={logged} sistemaVentas={sistemaVentas} setsistemaVentas={setsistemaVentas} />
        </Route>
        
        <Route path="/SistemaVentas" exact>
          <SistemaVentas sistemaVentas={sistemaVentas} setsistemaVentas={setsistemaVentas} />
        </Route>

        <Route path="/" exact>
          <Home isLoggedIn={logged} ventasrealizadas={ventasrealizadas} setventasrealizadas={setventasrealizadas} />
        </Route>
        
        <Route path="/VentasRealizadas" exact>
          <VentasRealizadas ventasrealizadas={ventasrealizadas} setventasrealizadas={setventasrealizadas} />
        </Route>

        <Route path="/GestorProductos" exact>
          <GestorProductos/>
        </Route>

        <Route path="/ProductosDisponibles" exact>
          <ProductosDisponibles/>
        </Route>
   
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
