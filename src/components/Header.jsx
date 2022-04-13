import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const Header = () => {
    return (
        <>
        <div className='header--container'>
            <Link to="/" className="nav__link">
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <Link to="/about" className="nav__link">
                Sobre nosotros
            </Link>
            <Link to="/hipotecas" className="nav__link">
                Hipotecas
            </Link>
            <Link to="/contacto" className="nav__link">
                Contacto
            </Link>
        </div>
        </>
    );
};

export default Header;