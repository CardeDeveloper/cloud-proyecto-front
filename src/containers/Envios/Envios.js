import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {Card,Button,Col,Row,Modal} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Menu from '../menu';
import Login from '../Login/login';

const Envios = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userEmail = window.sessionStorage.getItem("email");
    const userPassword = window.sessionStorage.getItem("password");
    const url = 'https://vl8v5y1mth.execute-api.us-east-1.amazonaws.com/prod/envios';
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [envios, setEnvios] = useState([]);
    
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await axios.get(url);
            setEnvios(res.data.data.Items);
            var div = document.getElementbyId('divEnvio');
            var listEnvios = [];
            for (var i = 0; i < envios.length; i++) {
                listEnvios[i] = React.createElement(Col, {md:'3', key:i},
                        <Card  className="text-center mb-2">
                        <Card.Header>#ID: {i}</Card.Header>
                        <Card.Body>
                            <Card.Title>{envios[i].name}</Card.Title>
                            <Card.Text>
                            <p>Código: {envios[i].code}</p>
                            <p>Precio: ${envios[i].address}</p>
                            </Card.Text>
                            <Button id={i} variant="warning" onClick={editEnvio}>Editar</Button>
                            <Button variant="danger" id={i} onClick={deleteEnvio}>Eliminar</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                    </Card>
                )
            }
            
            var component = React.createElement(Row, {}, listEnvios);
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
    },[envios]);

    //agregar envio
    const onSubmit = () =>{

    }

    //editar envio
    const editEnvio = (event) =>{
        var id = event.target.attributes.id.value;

    }

    //borrar envio
    const deleteEnvio = (event) =>{
        var id = event.target.attributes.id.value;
    }

    return(
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Envios</h1>
            <div id='divEnvio'></div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar Envio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="nameArticulo">Nombre del Articulo</label>
                    <br/>
                    <input id="nameArticulo" aria-invalid={errors.nameArticulo ? "true" : "false"}
                    {...register('nameArticulo', { required: true, maxLength: 30 })}
                    />

                    {errors.nameArticulo && errors.nameArticulo.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                    {errors.nameArticulo && errors.nameArticulo.type === "maxLength" && (
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
                <form>
                    <label htmlFor="nameArticuloEdt">Nombre del Articulo</label>
                    <br/>
                    <input id="nameArticuloEdt"/>
                    <br/>
                    <br/>

                    <label htmlFor="imgArticuloEdt">Imagen del Articulo</label>
                    <br/>
                    <input type="file" id="imgArticuloEdt"/>
                    <br/>
                    <br/>
                    <label htmlFor="precioEdt">Precio del Articulo</label>
                    <br/>
                    <input type="text" id="precioEdt"/>
                    <br/>
                    <br/>

                    <Button onClick={editEnvio} variant="primary">
                        Guardar
                    </Button>

                </form>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
                Cerrar
            </Button>
            </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Envios;