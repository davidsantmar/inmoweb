import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className='header--container'>
            <Link to="/" className="nav--link logo">
            </Link>
            <Link to="/about" className="nav--link">
                Sobre nosotros
            </Link>
            <Link to="/hipotecas" className="nav--link">
                Hipotecas
            </Link>
            <Link to="/contacto" className="nav--link">
                Contacto
            </Link>
        </div>
        </>
    );
};

export default Header;