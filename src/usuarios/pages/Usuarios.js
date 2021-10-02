import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Usuarios = () => {
return(
    <Nav justify variant="tabs" defaultActiveKey="/Nav.Link">
  
  <Nav.Item>
    <Nav.Link eventKey="link-1">Listar Usuario</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Activar Usuario</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" enable>
      Desactivar Usuario
    </Nav.Link>
  </Nav.Item>
  <NavDropdown title="Crear Usuario" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Vendedor</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Administrador</NavDropdown.Item>
        </NavDropdown>
</Nav>
    );  
}
export default Usuarios;