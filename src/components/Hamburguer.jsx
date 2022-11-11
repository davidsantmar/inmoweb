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
    //document.getElementById('hamburguer-container').addEventListener('click',function(){
      //document.getElementById('menu-toggle').checked === false;
          
      
    
    
    }

    return (
        <>
           <section className='hamburguer--container' id='hamburguer-container'>
                <div>
                    <Link to='/' className='nav__link logo--container' data-testid='logo-link'>
                        <img className='logo' src={logo} alt='logo'/>
                    </Link>                
                </div>
                <input id='menu-toggle' type='checkbox' />
                <label className='menu-button-container' htmlFor='menu-toggle'>
                <div className='menu-button'>
                </div>
                </label>
                <ul className='menu'>
                    <li className='menu__option'>
                        <Link to='/about' className='nav__link' data-testid='about-us-link' onClick={closeMenu}>
                            About us
                        </Link>
                    </li>
                    <li className='menu__option'>
                        <Link to='/mortgages' className='nav__link' data-testid='hipotecas-link' onClick={closeMenu}>
                            Mortgages
                        </Link>
                    </li>
                    <li className='menu__option' onClick={closeMenu}>
                        <Link to='/contact' className='nav__link' data-testid='contacto-link' onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                    {isAuthenticated ? (
                    <>
                    <li className='menu__option'>
                      <Link to='/createProperty' className='nav__link' onClick={closeMenu}>
                          Admin
                      </Link> 
                    </li>
                    <li className='nav__link logout__button'
                      onClick={handleLogout}
                        type='button'
                        data-testid='logout-button'
                      >
                        <Link to='/' className='nav__link__logout'>
                          <span className='off__symbol' onClick={closeMenu}>&#x23FB;</span>
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
                    <span className='on__symbol'>&#x23FB;</span>
                  </li>
                )}
                </ul>
            </section>
        </>
    );
};

export default Hamburguer;