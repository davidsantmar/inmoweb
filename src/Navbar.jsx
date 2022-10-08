import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className='admin--container'>
            <Link className='admin__button'>
                Create property
            </Link>
            <Link className='admin__button'>
                Property list
            </Link>
            <Link to='/addUser' className="nav__link">
                Users management
            </Link> 
        </nav>
        </>
    );
};

export default Navbar;