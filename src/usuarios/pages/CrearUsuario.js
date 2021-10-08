import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";


const CrearUsuario = () => {
    const rol = [
        { id: 1, nombre: "Sin registrar" },
        { id: 2, nombre: "Vendedor" },
        { id: 3, nombre: "Administrador" },
     
    ];


    return (
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Asignacion de Usuarios</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={6}>
                        <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Documento</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control as="textarea" style={{ height: "50px" }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>

                                                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Sucursal</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seleccione el Rol del usuario</option>
                                    {rol.map((rol) => (
                                        <option value={rol.id}>{rol.nombre}</option>
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
                                Crear Usuario
                            </Button>


                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default CrearUsuario;