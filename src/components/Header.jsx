import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { useDispatch, useSelector} from "react-redux";
import { login, logout } from "../redux/actions/authActionCreator";

const Header = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => {
        return {
          isAuthenticated: state.auth.isAuthenticated,
          user: state.auth?.additionalUserInfo?.profile.email,
        };
      });
    
      /*useEffect(() => {
        isAuthenticated && dispatch({ type: taskActionTypes.LOAD_TASKS });
      }, [dispatch, isAuthenticated, tasks]);*/

    function handleLogin(){    
      dispatch(login());
      console.log('ok');
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
            <Link to="/about" className="nav__link" data-testid='about-us-link'>
                Sobre nosotros
            </Link>
            <Link to="/hipotecas" className="nav__link" data-testid='hipotecas-link'>
                Hipotecas
            </Link>
            <Link to="/contacto" className="nav__link" data-testid='contacto-link'>
                Contacto
            </Link>
            
            {isAuthenticated ? (
          <>
            <Link to='/pa' className="nav__link">
                Posting Administrator
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