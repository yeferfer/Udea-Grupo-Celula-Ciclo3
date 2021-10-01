import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login, cantCarrito }) => {
  return (
    <Navbar bg="danger"  variant="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="justify-content-end">
          <HeaderButtons
            isLoggedIn={isLoggedIn}
            setLogin={login}
            cantCarrito={cantCarrito}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
