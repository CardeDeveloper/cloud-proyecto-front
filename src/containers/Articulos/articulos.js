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
                            <Button id={i} variant="warning" onClick={handleShow2}>Editar</Button>
                            <Button variant="danger" id={i} onClick={deleteArticulo}>Eliminar</Button>
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
        var inputName = document.getElementById("nameArticulo");

        //TODO: ver lo de las imagenes
        var inputImg = document.getElementById("imgArticulo");
        var inputPrecio = document.getElementById("precio");

        var jsonObject = {};
        jsonObject['name'] = inputName.value;
        jsonObject['price'] = inputPrecio.value;

        axios.post(url, jsonObject);
        setShow(false);

    }

    const deleteArticulo = (event) =>{
        const fetchDelete = async (id) => {
            //delete element
            await axios.delete(url+'?id='+id);
        }

        var id  = event.target.attributes.id.value;
        var element = articulos[id];
        fetchDelete(element.id);
    }

    const editArticulo = () =>{
        var i = editId;
        var inputName = document.getElementById("nameArticuloEdt");

        //TODO: ver lo de las imagenes
        var inputImg = document.getElementById("imgArticuloEdt");
        var inputPrecio = document.getElementById("precioEdt");

        articulos[i].name = inputName.value !== "" ? inputName.value: articulos[i].name;
        articulos[i].price = inputPrecio.value !== "" ? inputPrecio.value : articulos[i].price;
        
        const edt = async (element) =>{
           await axios.put(url+'?id='+element.id, element);
        }

        edt(articulos[i]);
        setShow2(false);
        
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

                    <Button onClick={editArticulo} variant="primary">
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
    )
}

export default Articulos;