import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import ClienteIndex from '../Cliente/index';
import '../../styles/components/login.scss';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSession = () =>{
        // var correo = document.getElementById('fname');
        // var password = document.getElementById('fpassword');
        var p = document.getElementById('loginDiv');

        if(email === "" || password === ""){
            p.innerText = "Llene los campos";
            console.log(email + " "+ password)
        }else{
            p.innerHTML = "";
            window.sessionStorage.setItem("password", password);
            window.sessionStorage.setItem("email", email);
            ReactDOM.render(<ClienteIndex/>, document.getElementById('root'));
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
                    <Button variant="secondary">Olvidé mi contraseña</Button>
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