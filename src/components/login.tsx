import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'USER' }));
        navigate('/dashboard');
    }

    return (
        <div className='login'>
            <h2>Welcome to Login Page</h2>
            <p>Please Login !!</p>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login