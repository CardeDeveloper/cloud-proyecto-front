import {Card,Button,Col,Row,Modal} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Menu from '../menu';
import Login from '../Login/login';

const  ClienteIndex = () => {
    const userEmail = window.sessionStorage.getItem("email");
    const userPassword = window.sessionStorage.getItem("password");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const url = 'https://vl8v5y1mth.execute-api.us-east-1.amazonaws.com/prod/clientes';
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    // const [first, setFirst] = useState(false);
    const [editId, setEditId] = useState(-1);
    const [clientes, setClientes] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const client = await axios.get(url);
            setClientes(client.data.data.Items);
            var column = document.getElementById('clientColumn');                  
            var listComponents = [];
            for(var i = 0; i < clientes.length; i++){
                listComponents[i] = React.createElement(Col, {md:'3', key:i},
                    <Card  className="text-center mb-2">
                        <Card.Header>#ID: {i}</Card.Header>
                        <Card.Body>
                            <Card.Title>{clientes[i].name}</Card.Title>
                            <Card.Text>
                            <p>{clientes[i].email}</p>
                            <p>{clientes[i].phone}</p>
                            </Card.Text>
                            <Button variant="warning" id={i} onClick={handleShow2}>Editar</Button>
                            <Button variant="danger" id={i} onClick={deleteFunc}>Eliminar</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Agregado hace 2 dias</Card.Footer>
                    </Card>                
                )
            }

            var component = React.createElement(Row,{},listComponents);  
            ReactDOM.render(
                component, column
            )
            // setFirst(true);
        };

        if(userEmail === null || userPassword === null || userEmail === "" || userPassword === ""){
            ReactDOM.render(
                <Login/>,document.getElementById('root')
            )
        }else{
            // if(!first){
            fetchData();
            // }
        }
    },[clientes]);

    const deleteFunc = (event) =>{
        const fetchDelete = async (id) => {
            //delete element
            await axios.delete(url+'?id='+id);
        }

        //get id to delete
        var id  = event.target.attributes.id.value;
        var element = clientes[id];
        fetchDelete(element.id);
        // setFirst(false);
        // window.location.reload(false);
    }

    const onSubmit = (event) => {
        // event.preventDefault;
        var inputName = document.getElementById('name');
        var inputCorreo = document.getElementById('correo');
        var inputTelefono = document.getElementById('telefono');
        
        var jsonObject = {};
        // jsonObject['id']
        jsonObject['email'] = inputCorreo.value;
        jsonObject['name'] = inputName.value;
        jsonObject['phone'] = inputTelefono.value;
        
        //hacer post a axios 
        axios.post(url, jsonObject);;

        //cerrar al final el modal
        setShow(false);
        // setFirst(false);
        // window.location.reload();
    }
    
    const onSubmitEditForm = (event) =>{
        // event.preventDefault();
        //get id del elemento
        var i  = editId; 
        var inputName = document.getElementById('nameEdit');
        var inputCorreo = document.getElementById('correoEdit');
        var inputTelefono = document.getElementById('telefonoEdit');

        clientes[i].name = inputName.value !== "" ? inputName.value : clientes[i].name;
        clientes[i].email = inputCorreo.value !== "" ? inputCorreo.value : clientes[i].email;
        clientes[i].phone = inputTelefono.value !== "" ? inputTelefono.value : clientes[i].phone;

        const edt = async (element) =>{
            // await axios.put(url+'/'+element.id, element);
            await axios.put(url+'?id='+element.id, element);
        }

        edt(clientes[i]);
        // setFirst(false);
        // window.location.reload();
        setShow2(false);
    }

    const handleClose = () => {    
        setShow(false);
    }
    const handleClose2 = () => {    
        setShow2(false);
    }
    const handleShow = () => setShow(true);
    const handleShow2 = (event) => {
        setEditId(event.target.attributes.id.value)
        setShow2(true);
    }
    return (
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Clientes</h1>
            <div id='clientColumn'></div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="name">Nombre del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input
                    id="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register('name', { required: true, maxLength: 30 })}
                    />

                    {/* use role="alert" to announce the error message */}
                    {errors.name && errors.name.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                    {errors.name && errors.name.type === "maxLength" && (
                        <span role="alert">Largo máximo excedido</span>
                        )}

                        <br/>
                    <label htmlFor="correo">Correo del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input id="correo"
                    aria-invalid={errors.correo ? "true" : "false"}
                    {...register('correo', { required: true})}
                    />

                    {/* use role="alert" to announce the error message */}
                    {errors.correo && errors.correo.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                        <br/>

                    <label htmlFor="telefono">Teléfono del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input id="telefono" type="number"
                    aria-invalid={errors.telefono ? "true" : "false"}
                    {...register('telefono', { required: true, minLength:8})}
                    />

                    {/* use role="alert" to announce the error message */}
                    {errors.telefono && errors.telefono.type === "required" && (
                        <span role="alert">Llene este campo</span>
                        )}
                    {errors.telefono && errors.telefono.type === "minLength" && (
                        <span role="alert">Debe ser un número de teléfono</span>
                        )}
                        <br/>
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
            <Modal.Title>Edición del Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <label htmlFor="nameEdit">Nombre del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input id="nameEdit"/>
                    
                    <br/>
                    <label htmlFor="correoEdit">Correo del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input id="correoEdit"/>
                    <br/>

                    <label htmlFor="telefonoEdit">Teléfono del Usuario</label>
                    <br/>

                    {/* use aria-invalid to indicate field contain error */}
                    <input id="telefonoEdit" type="number"/>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="primary" onClick={onSubmitEditForm}>
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
  
  export default ClienteIndex;
  