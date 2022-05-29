import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../firebase/actions';

const LoginButton = () => {
    const handleLogin = () =>{
        login();
    }
    return (
        <div className='admin--container'>
                <button className='admin__button' 
                onClick={handleLogin} 
                data-testid='admin-button'>
                <Link to='/PA'>
                    Administrator
                </Link>
                </button>
        </div>
    );
};

export default LoginButton;