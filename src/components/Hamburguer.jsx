import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { login, logout } from '../redux/actions/authActionCreator';
import { firebaseLogin } from '../firebase/actions';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';

const Hamburguer = () => {
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
    const closeMenu = () => {
      document.getElementById('menu-toggle').checked = false;
    }

    return (
        <>
           <nav className='hamburguer--container' id='hamburguer-container'>
                  <Link to='/' className='logo__nav__link nav__link' data-testid='logo-link'>
                      <img className='logo' src={logo} alt='logo'/>
                  </Link>  
                  <input id='menu-toggle' type='checkbox' />
                  <label className='menu-button-container' htmlFor='menu-toggle'>
                  <div className='menu-button'>
                  </div>
                  </label>
                <ul className='menu'>
                      <li>
                        <Link to='/about' className='menu__option menu__option nav__link' data-testid='about-us-link' onClick={closeMenu}>
                            About us
                        </Link>
                      </li>
                    <li>
                        <Link to='/mortgages' className='menu__option nav__link' data-testid='hipotecas-link' onClick={closeMenu}>
                            Mortgages
                        </Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to='/contact' className='menu__option nav__link' data-testid='contacto-link' onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                    {isAuthenticated ? (
                    <>
                    <li>
                      <Link to='/createProperty' className='menu__option nav__link' onClick={closeMenu}>
                          Admin
                      </Link> 
                    </li>
                    <li 
                      onClick={handleLogout}
                      className='logout__button'
                        type='button'
                        data-testid='logout-button'
                      >
                        <Link to='/' className='nav__link__logout' onClick={closeMenu}>
                          <span className='off__symbol'>&#x23FB;</span>
                        </Link> 
                    </li>
                  </>
                  ) : (
                  <li
                    onClick={handleLogin}
                    type='button'
                    className='login__button'
                    data-testid='login-button'
                  >
                    <span className='on__symbol nav__link'>&#x23FB;</span>
                  </li>
                )}
                </ul>
            </nav>
        </>
    );
};

export default Hamburguer;