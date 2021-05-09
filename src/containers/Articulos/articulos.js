import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {Card,Button,Col,Row,Modal} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Menu from '../menu';
import Login from '../Login/login';

const Articulos = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userEmail = window.sessionStorage.getItem("email");
    const userPassword = window.sessionStorage.getItem("password");
    const url = 'https://vl8v5y1mth.execute-api.us-east-1.amazonaws.com/prod/articulos';    
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [editId, setEditId] = useState(-1);
    const [articulos, setArticulos] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await axios.get(url);
            setArticulos(res.data.data.Items);
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
                            <Button variant="warning" onClick={handleShow2}>Editar</Button>
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
        }

        if(userEmail === null || userPassword === null || userEmail === "" || userPassword === ""){
            ReactDOM.render(
                <Login/>,document.getElementById('root')
            )
        }else {
            fetchData();
        }
        
    }, [articulos]);

    const onSubmit = () =>{

    }

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = (event) => {
        setEditId(event.target.attributes.id.value)
        setShow2(true);
    }
    return(
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Articulos</h1>
            <div id='divArticulo'></div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar Articulo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="nameArticulo">Nombre del Articulo</label>
                    <br/>
                    <input id="nameArticulo" aria-invalid={errors.nameArticulo ? "true" : "false"}
                    {...register('nameArticulo', { required: true, maxLength: 30 })}
                    />

                    {errors.name && errors.name.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                    {errors.name && errors.name.type === "maxLength" && (
                        <span role="alert">Largo máximo excedido</span>
                        )}
                    <br/>
                    <br/>

                    <label htmlFor="imgArticulo">Imagen del Articulo</label>
                    <br/>
                    <input type="file" id="imgArticulo"/>
                    <br/>
                    <br/>
                    <label htmlFor="precio">Precio del Articulo</label>
                    <br/>
                    <input type="text" id="precio" aria-invalid={errors.precio ? "true" : "false"}
                    {...register("precio", {required: true})}/>
                    {errors.precio && errors.precio.type === "required" && (
                        <span role="alert">Llene este campo</span>
                    )}
                    <br/>
                    <br/>

                    <Button type="submit" variant="primary">
                        Guardar
                    </Button>

                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar Artículo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Form.Group >
                    <Form.Label>Nombre del Articulo: </Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Articulo"/>           
                    <Form.Label>Imagen del Articulo: </Form.Label>
                    <Form.Control type="file" placeholder="Correo del Articulo" accept="image/jpg"/>           
                    <Form.Label>Precio del Articulo: </Form.Label>
                    <Form.Control type="text" placeholder="Precio del Articulo"/>           
                </Form.Group> */}
                {/* <form onSubmit={handleSubmit(onSubmit)}>

                </form> */}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose2}>
                Guardar
            </Button>
            </Modal.Footer>
            </Modal>
        </section>
    )
}

export default Articulos;