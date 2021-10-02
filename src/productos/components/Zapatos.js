import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Zapatos1 = ({Zapatos}) => {
    return(
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Zapatos.url} />
        <Card.Body>
            <Card.Title>{Zapatos.title}</Card.Title>
            <Card.Text>
              {Zapatos.description}
            </Card.Text>
            <Button variant="danger">${Zapatos.price}</Button>
        </Card.Body>
    </Card>
    )

};


export default Zapatos1;