import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/components/login.scss';

const Login = () =>{
    return(
        <div className='login-body'>
            <div className='login-container'>
                <form >
                    <h1>Inicio de Sesión</h1>
                    <label htmlFor="fname">Correo</label>
                    <input type="text" id="fname" className="correo" placeholder="Ingrese su correo..."/>
                    <label htmlFor="fname">Password</label>
                    <input type="password" id="fname" className="passwrd" placeholder="Contraseña..."/>
                    <Button variant="secondary">Olvidé mi contraseña</Button>
                    <Button variant="primary" type="submit">Iniciar Sesión</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;