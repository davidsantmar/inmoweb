import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { useDispatch, useSelector} from "react-redux";
import { login, logout } from "../redux/actions/authActionCreator";
import { firebaseLogin } from '../firebase/actions';


const Header = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => {
        return {
          isAuthenticated: state.auth.isAuthenticated
        };
      });

    async function handleLogin(){   
      const email = await firebaseLogin();
      if (email === 'davidsantmar@gmail.com'){ //user granted
        dispatch(login());
      }    
    }
    
    function handleLogout() {
      dispatch(logout());
    }
    return (
        <>
        <nav className='header--container' data-testid='header-container'>
            <Link to="/" className="nav__link" data-testid='logo-link'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <Link to="/about" className="nav__link about__us__link" data-testid='about-us-link'>
              <span className='nav__about__us'>About us</span>
            </Link>
            <Link to="/hipotecas" className="nav__link" data-testid='hipotecas-link'>
                Mortages
            </Link>
            <Link to="/contacto" className="nav__link" data-testid='contacto-link'>
                Contact
            </Link>
            
            {isAuthenticated ? (
          <>
            <Link to='/pa' className="nav__link">
                Admin
            </Link> 
            <button
              onClick={handleLogout}
              type="button"
              className="login__button" 
              data-testid='login-button'
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            type="button"
            className="login__button" 
          >
            Login
          </button>
        )}
        </nav>
        </>
    );
};

export default Header;