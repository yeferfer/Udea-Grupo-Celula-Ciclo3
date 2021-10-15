import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";


const SistemaVentas = () => {
    const categorias = [
        { id: 1, nombre: "Moderno" },
        { id: 2, nombre: "Informal" },
        { id: 3, nombre: "Bohemio" },
        { id: 4, nombre: "Clasico" },
        { id: 5, nombre: "Deportes" },
        { id: 6, nombre: "Elegante" },
        { id: 7, nombre: "Casual" },
        { id: 8, nombre: "Juvenil" },
    ];

    const vendedores = [
        { id: 100, nombre: "Andrea" },
        { id: 200, nombre: "Camila" },
        { id: 300, nombre: "Edison" },
        { id: 400, nombre: "Jairo" },
        { id: 500, nombre: "Yefferson" },

    ];

    return (
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Sistema de Ventas</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={6}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fecha Venta</Form.Label>
                                <Form.Control type="date" id="form"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Referencia</Form.Label>
                                <Form.Control as="textarea" style={{ height: "50px" }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Sucursal</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Vendedores</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seleccione un vendedor</option>
                                    {vendedores.map((categoria) => (
                                        <option value={categoria.id}>{categoria.nombre}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seleccione una categoria</option>
                                    {categorias.map((categoria) => (
                                        <option value={categoria.id}>{categoria.nombre}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Button type="button" variant="outline-secondary">
                                Cancelar
                            </Button>
                            <Button
                                type="button"
                                variant="danger"
                                className="float-end"
                            >
                                Registrar Venta
                            </Button>


                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default SistemaVentas;