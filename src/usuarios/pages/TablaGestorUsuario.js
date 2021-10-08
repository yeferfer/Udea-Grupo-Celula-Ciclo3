/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TablaGestorUsuario = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Gestion de Usuarios</h1>
      <Container>
        <table class="table" border="4">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre y apellido</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Sucursal</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody class="section section-step">
            <tr class="sub-header">
              <th scope="row">0</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Container>

     
     
       
       <Button type="button" variant="danger" className="float-end"> Buscar </Button>  
       <input type="text" class="form-control" variant="danger" className="float-end" Buscar />
       <Button type="button" variant="outline-secondary" className="float-right">Modificar</Button>
       <Button type="button" variant="danger" className="justify-content-between">Eliminar</Button>
    </div>
  );
};

export default TablaGestorUsuario;
