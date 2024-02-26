import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        try {
            console.log('Datos ingresados:');
            console.log('Usuario:', username);
            console.log('Contraseña:', password);

            const response = await axios.get('http://localhost:8888/?endpoint=usuarios');
            const users = response.data;

            console.log('Datos obtenidos de la API:');
            console.log(users);

            const user = users.find(user => user.usuario === username);

            console.log('Usuario encontrado:', user);

            if (user && user.password === password) {
                console.log('Usuario autenticado correctamente');
                
                if (accessCode && user.codigo === accessCode) { 
                    console.log('Código de acceso correcto. Inicio de sesión exitoso');

                    // Guardar la sesión en una cookie con duración de 24 horas
                    Cookies.set('loggedIn', true, { expires: 1 }); // Duración de 1 día (24 horas)
                    
                    navigate('/account/admin/home');
                } else {
                    console.log('Código de acceso incorrecto');
                    setErrorMessage('Código de acceso incorrecto');
                }
            } else {
                console.log('Usuario o contraseña incorrectos');
                setErrorMessage('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            setErrorMessage('Error al intentar iniciar sesión');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label className="form-label">Usuario:</label>
                    <input className="form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Contraseña:</label>
                    <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {username && password && (
                    <div className="form-group">
                        <label className="form-label">Código de acceso:</label>
                        <input className="form-input" type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
                    </div>
                )}
                <button className="submit-button" type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
