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
    return (
        <>
           <section className="hamburguer--container">
                <div>
                    <Link to="/" className="nav__link" data-testid='logo-link'>
                    <img className='logo' src={logo} alt='logo'/>
                    </Link>                
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'>
                </div>
                </label>
                <ul className="menu">
                    <li>
                        <Link to="/about" className="nav__link about__us__link" data-testid='about-us-link'>
                            <span className='nav__about__us'>About us</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mortgages" className="nav__link" data-testid='hipotecas-link'>
                            Mortgages
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav__link" data-testid='contacto-link'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={handleLogout} type="button" className="logout__button"  data-testid='logout-button'>
                            &#x23FB;
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Hamburguer;