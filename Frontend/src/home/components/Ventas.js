import Card from "react-bootstrap/Card";
import CardFooter from "./CardFooter";

const Ventas = ({ venta, isLoggedIn, ventas, carrito, setCarrito }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={venta.url} />
      <Card.Body>
        <Card.Title>{venta.title}</Card.Title>
        <Card.Text>{venta.description}</Card.Text>
        <CardFooter
          id={venta.id}
          precio={venta.price}
          categoria={venta.categoria}
          isLoggedIn={isLoggedIn}
          ventas={ventas}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </Card.Body>
    </Card>
  );
};

export default Ventas;
