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
    const [editId, setEditId] = useState(-1);
    
    const handleShow = () => setShow(true);
    const handleShow2 = (event) => {
        setEditId(event.target.attributes.id.value)
        setShow2(true);
    }
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await axios.get(url);
            setEnvios(res.data.data.Items);
            var div = document.getElementById('divEnvio');
            var listEnvios = [];
            for (var i = 0; i < envios.length; i++) {
                listEnvios[i] = React.createElement(Col, {md:'3', key:i},
                        <Card  className="text-center mb-2">
                        <Card.Header>#ID: {i}</Card.Header>
                        <Card.Body>
                            <Card.Title>{envios[i].delivery}</Card.Title>
                            <Card.Text>
                            <p>Código: {envios[i].tracking}</p>
                            <p>ID cliente: {envios[i].id_client}</p>
                            </Card.Text>
                            <Button id={i} variant="warning" onClick={handleShow2}>Editar</Button>
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
    const onSubmit = async () =>{
        var envio = document.getElementById('envio');
        var codigo = document.getElementById('tracking');
        var idCliente = document.getElementById('cliente');

        var jsonObject = {
            "delivery": envio.value,
            "tracking": codigo.value,
            "id_client": idCliente.value
        }

        var res = await axios.post(url, jsonObject);
        console.log(res);
        setShow(false);
    }

    //editar envio
    const editEnvio = async () =>{
        var i = editId;
        var envio = document.getElementById('envioEdt');
        var codigo = document.getElementById('trackingEdt');
        var idCliente = document.getElementById('clienteEdt');

        envios[i].delivery = envio.value !== "" ? envio.value: envios[i].delivery;
        envios[i].tracking = codigo.value !== "" ? codigo.value : envios[i].tracking;
        envios[i].id_client = idCliente.value !== "" ? idCliente.value : envios[i].id_client;
        
        await axios.put(url+'?id='+envios[i].id,envios[i]);

        setShow2(false);
    }
    
    //borrar envio
    const deleteEnvio = async (event) =>{
        var i = event.target.attributes.id.value;
        
        await axios.delete(url+'?id='+envios[i].id);
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
                    <label htmlFor="envio">Envio</label>
                    <br/>
                    <input id="envio" aria-invalid={errors.envio ? "true" : "false"}
                    {...register('envio', { required: true, maxLength: 30 })}
                    />

                    {errors.envio && errors.envio.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                    {errors.envio && errors.envio.type === "maxLength" && (
                        <span role="alert">Largo máximo excedido</span>
                        )}
                    <br/>
                    <br/>

                    <label htmlFor="tracking">Código de envío:</label>
                    <br/>
                    <input type="text" id="tracking" aria-invalid={errors.precio ? "true" : "false"}
                    {...register("tracking", {required: true})}/>
                    {errors.tracking && errors.tracking.type === "required" && (
                        <span role="alert">Llene este campo</span>
                    )}
                    <br/>
                    <br/>
                    <label htmlFor="tracking">ID del Cliente:</label>
                    <br/>
                    <input type="text" id="cliente" aria-invalid={errors.precio ? "true" : "false"}
                    {...register("cliente", {required: true})}/>
                    {errors.cliente && errors.cliente.type === "required" && (
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
            <Modal.Title>Editar Envío</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="envioEdt">Envio</label>
                    <br/>
                    <input id="envioEdt"/>
                    <br/>
                    <br/>

                    <label htmlFor="trackingEdt">Código de envío:</label>
                    <br/>
                    <input type="text" id="trackingEdt"/>

                    <br/>
                    <br/>
                    <label htmlFor="clienteEdt">ID del Cliente:</label>
                    <br/>
                    <input type="text" id="clienteEdt"/>

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