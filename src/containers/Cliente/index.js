import {Navbar,Nav, CardDeck,Card,Button,Col,Row,Modal,Form} from 'react-bootstrap'
import React, { useState } from 'react';
import Menu from '../menu'
function ClienteIndex() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <Menu></Menu>
            <Button className="mb-3">Agregar</Button>
            <Row>
                <Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning" onClick={handleShow}>Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col><Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Oscar Cardenas</Card.Title>
                        <Card.Text>
                        <p>oscar@mail.com</p>
                        <p>3333333333</p>
                        </Card.Text>
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edición del Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Usuario"/>           
                    <Form.Label>Correo: </Form.Label>
                    <Form.Control type="text" placeholder="Correo del Usuario"/>           
                    <Form.Label>Teléfono: </Form.Label>
                    <Form.Control type="text" placeholder="Teléfono del Usuario"/>           
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Guardar
            </Button>
            </Modal.Footer>
        </Modal>
        </section>
    );
  }
  
  export default ClienteIndex;
  