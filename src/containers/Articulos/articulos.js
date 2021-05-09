import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {Card,Button,Col,Row,Modal,Form} from 'react-bootstrap'
import Menu from '../menu'

const Articulos = () =>{
    const url = 'https://vl8v5y1mth.execute-api.us-east-1.amazonaws.com/prod/articulos';    
    const [show, setShow] = useState(false);
    const [first, setFirst] = useState(false);
    const [articulos, setArticulos] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await axios.get(url);
            setArticulos(res.data.Items);
            console.log(articulos);
            var div = document.getElementById('divArticulo');
            var listArticulos = [];
            for(var i = 0; i < articulos.length; i++){
                listArticulos[i] = React.createElement(Col, {md:'3', key:i},
                    <Card  className="text-center mb-2">
                        <Card.Header>#ID: {i}</Card.Header>
                        <Card.Body>
                            <Card.Title>{articulos[i].name}</Card.Title>
                            <Card.Text>
                            <p>Código: {articulos[i].code}</p>
                            <p>instertar imagen</p>
                            <p>categoria</p>
                            <p>Precio: ${articulos[i].price}</p>
                            </Card.Text>
                            <Button variant="warning" onClick={handleShow}>Editar</Button>
                            <Button variant="danger">Eliminar</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                    </Card>
                )
            }
            var component = React.createElement(Row,{},listArticulos);
            ReactDOM.render(
                component, div
            )
            setFirst(true); 
        }

        if(!first){
            fetchData();
        }
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Articulos</h1>
            <div id='divArticulo'></div>

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