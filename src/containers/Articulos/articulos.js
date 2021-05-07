import React, { useState } from 'react';
import {Navbar,Nav, CardDeck,Card,Button,Col,Row,Modal,Form} from 'react-bootstrap'
import Menu from '../menu'

const Articulos = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Articulos</h1>
            <Row>
                <Col md={3}>
                <Card  className="text-center mb-2">
                    <Card.Header>#ID</Card.Header>
                    <Card.Body>
                        <Card.Title>Articulo 001</Card.Title>
                        <Card.Text>
                        <p>instertar imagen</p>
                        <p>categoria</p>
                        <p>precio $$$</p>
                        </Card.Text>
                        <Button variant="warning" onClick={handleShow}>Editar</Button>
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
                    <Form.Label>Nombre del Articulo: </Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Articulo"/>           
                    <Form.Label>Imagen del Articulo: </Form.Label>
                    <Form.Control type="file" placeholder="Correo del Articulo" accept="image/jpg"/>           
                    <Form.Label>Precio del Articulo: </Form.Label>
                    <Form.Control type="text" placeholder="Precio del Articulo"/>           
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
    )
}

export default Articulos;