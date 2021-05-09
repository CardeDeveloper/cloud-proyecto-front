import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import {Card,Button,Col,Row,Modal} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Menu from '../menu';
import Login from '../Login/login';

const Envios = () =>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return(
        <section>
            <Menu></Menu>
            <Button className="mb-3" onClick={handleShow}>Agregar</Button>
            <h1>Envios</h1>
            <div id='divEnvio'></div>
        </section>
    );
}

export default Envios;