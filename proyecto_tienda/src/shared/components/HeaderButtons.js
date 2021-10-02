import React from "react";

import Button from "react-bootstrap/Button";
//import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito, }) => {
  const login = () => {
    setLogin(true);
  };

  const logout = () => {
    setLogin(false);
  };

  

  if (isLoggedIn) {
    return (
      
      <React.Fragment>
<<<<<<< HEAD
        <Link to ="/Usuarios">
          <Button variant="primary" className="me-3">
            Usuarios
          </Button>
          </Link>

=======

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
>>>>>>> 017d56eb823a78292b322d4ea23c75865cc56348

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
