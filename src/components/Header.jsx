import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';


const Header = () => {
    return (
        <>
        <nav className='header--container' data-testid='header-container'>
            <Link to="/" className="nav__link" data-testid='logo-link'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <Link to="/about" className="nav__link" data-testid='about-us-link'>
                Sobre nosotros
            </Link>
            <Link to="/hipotecas" className="nav__link" data-testid='hipotecas-link'>
                Hipotecas
            </Link>
            <Link to="/contacto" className="nav__link" data-testid='contacto-link'>
                Contacto
            </Link>
        </nav>
        </>
    );
};

export default Header;