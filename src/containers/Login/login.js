import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ClienteIndex from '../Cliente/index';
import '../../styles/components/login.scss';

const Login = () =>{
    const url = 'https://us-south.functions.appdomain.cloud/api/v1/web/is714181%40iteso.mx_dev/default/login';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSession = async () =>{
        var p = document.getElementById('loginDiv');
        
        if(email === "" || password === ""){
            p.innerText = "Llene los campos";
            console.log(email + " "+ password)
        }else{
            p.innerHTML = "";
            
            //validar credenciales
            var jsonLogin = {
                "user":{
                    "email": email,
                    "password": password
                }
            };
            
            var res = await axios.post(url, jsonLogin);
            if(res.data.status === "fallido"){
                p.innerText = "Credenciales no validas";
            }else{
                window.sessionStorage.setItem("password", password);
                window.sessionStorage.setItem("email", email);
                ReactDOM.render(<ClienteIndex/>, document.getElementById('root'));
            }
        }
    }

    return(
        <div className='login-body'>
            <div className='login-container'>
                <form >
                    <h1>Inicio de Sesión</h1>
                    <label htmlFor="fname" >Correo</label>
                    <input type="text" id="fname" className="correo" placeholder="Ingrese su correo..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="fpassword">Password</label>
                    <input type="password" id="fpassword" className="passwrd" placeholder="Contraseña..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                   />
                    <Button variant="primary" onClick={LoginSession}>Iniciar Sesión</Button>
                    <div style={{marginLeft:'10%'}}>
                        <p id="loginDiv" style={{color:'red'}}></p>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login;