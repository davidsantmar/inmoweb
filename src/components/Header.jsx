import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { login, logout } from '../redux/actions/authActionCreator';
import { firebaseLogin } from '../firebase/actions';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';

const Header = () => {
    const [users, setUsers] = useState([]);    
    const usersCollection = collection(db, 'users_admin');
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => {
        return {
          isAuthenticated: state.auth.isAuthenticated
        };
    });
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollection);
        setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }
      getUsers();  
    }, []);
    async function handleLogin(){
      const usuarios = [];
      const emails = [];
      const email = await firebaseLogin();
      for(let i=0; i < users.length; i++){
        usuarios.push(users[i]);
      }
      for(let i=0; i < usuarios.length; i++){
        emails.push(usuarios[i].user);
      }
      if (emails.includes(email)){
        dispatch(login());
      }else{
        alert('User not authorised.')
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
              <Link to="/mortgages" className="nav__link" data-testid='hipotecas-link'>
                  Mortgages
              </Link>
              <Link to="/contact" className="nav__link" data-testid='contacto-link'>
                  Contact
              </Link>
              {isAuthenticated ? (
              <>
                <Link to='/createProperty' className="nav__link">
                    Admin
                </Link> 
                <button
                  onClick={handleLogout}
                  type="button"
                  className="logout__button" 
                  data-testid='logout-button'
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