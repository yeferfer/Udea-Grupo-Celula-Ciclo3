import React from "react";

import Button from "react-bootstrap/Button";
//import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito }) => {
  const login = () => {
    setLogin(true);
    localStorage.setItem("isLogged", true);
  };

  const logout = () => {
    setLogin(false);
    localStorage.setItem("isLogged", false);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        {/* <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Venticas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item Link to="SistemaVentas" >Ingresar Venta</Dropdown.Item>
            <Dropdown.Item href="/SistemaVentas">Consultar Ventas</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Modificar Venta</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        <Link to="/SistemaVentas">
          <Button variant="danger" className="me-3">
            Ventas
          </Button>
        </Link>

        {/* <Link to="/Carrito">
          <Button variant="danger" className="me-3">
            Carrito <Badge bg="primary">{cantCarrito}</Badge>
          </Button>
        </Link> */}

        <Link to="/VentasRealizadas">
          <Button variant="danger" className="me-3">
            Ventas Realizadas
          </Button>
        </Link>

        <Link to="/GestorProductos">
          <Button variant="danger" className="me-3">
            Gestor Productos
          </Button>
        </Link>

        <Link to="/ProductosDisponibles">
          <Button variant="danger" className="me-3">
            Productos
          </Button>
        </Link>

        <Link to="/Usuarios">
          <Button variant="danger" className="me-3">
            Usuarios
          </Button>
        </Link>

        <Link to="/">
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <Button variant="danger" onClick={login}>
          Login
        </Button>
      </div>
    );
  }
};

export default HeaderButtons;
