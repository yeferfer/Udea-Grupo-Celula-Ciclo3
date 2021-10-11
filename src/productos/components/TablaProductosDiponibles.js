import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
      id: 1,
      title: "Pantuflas de goma",
      description: "Pantuflas minimalistas y comodas para uso casul",
      price: 10.0,
      category: "Casual",
      url: "https://ae01.alicdn.com/kf/H7f38fa68b1af448fb5171987687e45c4F.jpg?width=678&height=1024&hash=1702",
    },
    {
      id: 2,
      title: "Tacones altos de color negro",
      description: "Tacones negros de 8 cm de altura marca Loslandifen ",
      price: 100.0,
      category: "Elegantes",
      url: "https://cdn.pixabay.com/photo/2017/07/25/14/50/shoe-2538424_960_720.jpg",
    },
    {
      id: 3,
      title: "Zapatos deportivos",
      description:
        "Zapatilla deportivas con suela de goma que ayuda a la amortiguacion del pie al correr",
      price: 150.0,
      category: "Deportivos",
      url: "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg",
    },
    {
      id: 4,
      title: "Tenis colores fuerte",
      description: "Zapatos con colores vibrantes para lucir en la calle ",
      price: 120.0,
      category: "Deportivos",
      url: "https://cdn.pixabay.com/photo/2018/09/21/16/14/shoes-3693408_960_720.jpg",
    },
    {
      id: 5,
      title: "Mocacines",
      description: "Zapatos informales de diseñador en cuero",
      price: 200.0,
      category: "Bohemios",
      url: "https://ae01.alicdn.com/kf/H23b7cbbce8e8456f968c6b9b23dbc2d0q.jpg",
    },
    {
      id: 6,
      title: "Oxford",
      description:
        "Los clasicos oxford en cuero para agregar un poco de elegacia a los atuendos casuales",
      price: 160.0,
      category: "Clasicos",
      url: "https://cdn.pixabay.com/photo/2016/09/21/12/21/wingtip-1684700_960_720.jpg",
    },
    {
      id: 7,
      title: "Zapatos para bebés",
      description: "Zapatos para bebés tejido con lana",
      price: 30.0,
      category: "Clasicos",
      url: "https://cdn.pixabay.com/photo/2017/02/08/02/53/baby-2047595_960_720.jpg",
    },
    {
      id: 8,
      title: "Zapatos informales para mujer",
      description: "Zapatos planos sin cordones para verano",
      price: 60.0,
      category: "Informales",
      url: "https://ae01.alicdn.com/kf/H088230a8ad3148fb84065be80cea746cl.jpg",
    },
    {
      id: 9,
      title: "Botas tipo Chelsea",
      description: "botines de moda de alta calidad",
      price: 160.0,
      category: "Casuales",
      url: "https://ae01.alicdn.com/kf/H5ca53ad09fe847398ed9a9822cf7a8ac5.jpg",
    },
  ];

  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
