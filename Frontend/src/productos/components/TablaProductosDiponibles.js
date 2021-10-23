import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
        id : "D&G001",
        marca : "Dolce & Gabbana",
        title: "Botas de cuero",
        description: "Botas de cuero para hombres con altura hasta los tobillos",
        price: 6930000,
        category: "Elegante",
        url:"https://imagizer.imageshack.com/v2/565x720q90/r/922/4gQefR.jpg", 
    },
    {
        id: "D&G002",
        marca : "Dolce & Gabbana",
        title: "Zapatos de cuero",
        description: "Zapatos elegantes y comodos de la linea Napoli de la marca Dolce & Gabbana",
        price: 5513515,
        category: "Clasico",
        url: "https://imagizer.imageshack.com/v2/355x452q90/r/922/3Aduv0.jpg",
    },
    {
        id: "D&G003",
        marca : "Dolce & Gabbana",
        title: "Botines Chelsea",
        description: "Botines Chelsea Giotto en piel  de becerro pintada a mano",
        price: 6385217,
        category: "Casual",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/923/j11U97.jpg",
    },
    {
        id: "D&G004",
        marca : "Dolce & Gabbana",
        title: "Zapatos altos estilo animal print",
        description: "El icónico estampado de leopardo viene en tonos brillantes. Femeninos y sensuales",
        price: 3617600,
        category: "Elegante",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/924/dQw4EI.jpg",
    },
    {
        id: "D&G005",
        marca : "Dolce & Gabbana",
        title: "Botines de cuero",
        description: "Botines de nueva generación en piel de becerro engomado de la marca Dolce & Gabbana",
        price: 5513500,
        category: "Juvenil",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/922/bmxP8j.jpg",
    },
    {
        id: "D&G006",
        marca : "Dolce & Gabbana",
        title: "Sandalias plateadas",
        description: "Nuevas sandalias en Nylon acolchado con suela de micro goma",
        price: 5513600,
        category: "Informal",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/923/AFUdm3.jpg",
    },
    {
        id: "GVC001",
        marca : "Givenchy ",
        title: "Mocasines negros",
        description: "Mocasiones de cuero de la marca Givanchy",
        price: 3975000,
        category: "Bohemio",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/l2E2LC.jpg",
    },
    {
        id: "GVC002",
        marca : "Givenchy ",
        title: "Sandalias casuales para hombres",
        description: "Sandalias de goma color negro de la marca Givenchy",
        price: 1500000,
        category: "Casual",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/922/xiTUbx.jpg",
    },
    {
        id: "GVC003",
        marca : "Givenchy ",
        title: "Zapatos deportivos",
        description: "Zapatos de uso casual con diseño aerodinamico y detalles de cuero  ",
        price: 3695000,
        category: "Deportes",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/923/ROalUA.jpg",
    },
    {
        id: "GVC004",
        marca : "Givenchy ",
        title: "Botas de goma para mujeres",
        description: "Botas con estilo futurista elaborados en goma lisa mate ",
        price: 437500,
        category: "Moderno",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/DRc1dm.jpg",
    },
    {
        id: "GVC005",
        marca : "Givenchy ",
        title: "Suecos de gamuza",
        description: "Suecos de gamuza con adornos de taches metalicos",
        price: 437500,
        category: "Moderno",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/922/ElFXSA.jpg",
    },
    {
        id: "GVC006",
        marca : "Givenchy ",
        title: "Tacones altos",
        description: "Tacones de cuero con adornos metalicos ",
        price: 6370000,
        category: "Elegantes",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/MlGEvC.jpg",
    },
    {
        id: "DIR001",
        marca : "DIOR",
        title: "Mocasines clasicos",
        description: "Mocasiones de diseño clasico en piel de beccerro lisa y negra con contraste en beige y azul ",
        price: 5550000,
        category: "Bohemios",
        url: "https://imagizer.imageshack.com/v2/675x452q90/r/924/C1mISl.jpg",
    },
    {
        id: "DIR002",
        marca : "DIOR",
        title: "Sandalias para la playa",
        description: "Sandalias modernas y original con un diseño calado para mejorar la transpirabilidad elaborado en piel de becerro blanco y goma  ",
        price: 3201900,
        category: "Casual",
        url: "https://imagizer.imageshack.com/v2/687x452q90/r/922/ooX2IU.jpg",
    },
    {
        id: "DIR003",
        marca : "DIOR",
        title: "Zapatos de bota alta",
        description: "Zapatos casuales de caña alta es una pieza esecial de la colección elaborado en jacquard y suela de goma",
        price: 5550000,
        category: "Deportes",
        url: "https://imagizer.imageshack.com/v2/688x452q90/r/923/eX3UMR.jpg",
    },
    {
        id: "DIR004",
        marca : "DIOR",
        title: "Aplargatos bordadas",
        description: "Alpargatas elaborada en algodón bordado multicolor con suela de esparto elaborado de la forma tradicional",
        price: 2749900,
        category: "Bohemios",
        url: "https://imagizer.imageshack.com/v2/688x452q90/r/924/d6WDdP.jpg",
    },
    {
        id: "DIR005",
        marca : "DIOR",
        title: "Sandalias con el logo de DIOR",
        description: "Sandalia de diseño moderno de piel de cordero negra con una forma anatómica en piel ultraligera ",
        price: 5550000,
        category: "Informal",
        url: "https://imagizer.imageshack.com/v2/706x452q90/r/924/yWELFS.jpg",
    },
    {
        id: "DIR006",
        marca : "DIOR",
        title: "Botines en malla negros",
        description: "Botines de tacón en mallas de una estética refinada y moderna en piel de becerro ",
        price: 5085400,
        category: "Elegantes",
        url: "https://imagizer.imageshack.com/v2/699x452q90/r/923/TRzVXN.jpg",
    },
    {
        id: "BBY001",
        marca : "Burberry",
        title: "Botas Chelsea",
        description: "Botas Chelsea en piel con suela de goma a contraste ",
        price: 2605100,
        category: "Moderno",
        url: "https://imagizer.imageshack.com/v2/463x452q90/r/922/yRrh4H.jpg",
    },
    {
        id: "BBY002",
        marca : "Burberry",
        title: "Zapatos estilo deportivo",
        description: "Zapatillas deportivas en algodón a cuadros vintage checks",
        price: 2995800,
        category: "Casual",
        url: "https://imagizer.imageshack.com/v2/487x452q90/r/924/xLuxzf.jpg",
    },
    {
        id: "BBY003",
        marca : "Burberry",
        title: "Mocasines antifaz",
        description: "Mocasines de antifaz elaborado en Italia elaborado en piel",
        price: 2127500,
        category: "Clasico",
        url: "https://imagizer.imageshack.com/v2/457x452q90/r/922/WoNrzJ.jpg",
    },
    {
        id: "BBY004",
        marca : "Burberry",
        title: "Sandalias casuales para mujeres",
        description: "Sandalias en lona y piel con logotipo estampado",
        price: 2127500,
        category: "Informal",
        url: "https://imagizer.imageshack.com/v2/505x452q90/r/924/bom79J.jpg",
    },
    {
        id: "BBY005",
        marca : "Burberry",
        title: "Tacones altos con cordones",
        description: "Sandalias en piel con cordones y tacón de aguja",
        price: 2995800,
        category: "Moderno",
        url: "https://imagizer.imageshack.com/v2/448x452q90/r/924/QhZv9Y.jpg",
    },
    {
        id: "BBY006",
        marca : "Burberry",
        title: "Esparteñas de piel",
        description: "Esparteñas en piel de ovino y suela de goma ",
        price: 1606500,
        category: "Informal",
        url: "https://imagizer.imageshack.com/v2/489x452q90/r/924/zdHmdN.jpg",
    }
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
