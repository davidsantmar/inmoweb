import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/addUserActionCreator';
import { addUserFirebase } from "../firebase/dbactions";
import firebase from "firebase/compat/app";
import { showUsers } from '../redux/actions/showUsersActionCreator';

function UsersList() {
    const dispatch = useDispatch();
    const [emails, setEmails] = useState([]);
    const [user, setUser] = useState("");
    const grantedEmails = firebase.firestore().collection('users_admin');
    
    function handleChange(event) {
      setUser(event.target.value);
    }
    const handleEnterPressed = (event) => {
      if(event.key === 'Enter'){
          handleClick();        
      }
    }
    function getDatos(){
      const users = [];
      grantedEmails
      .get()
      .then((results) => {
        const data = results.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        for (let i = 0; i <= data.length; i++){
          users.push(data[i].user);
        }
        //return data;

      });
      console.log(users);//habemus array
      //setEmails(emails => [...emails, users]);
      setEmails([...emails, users]); //no funciona
      console.log(emails);
      return users;
    }
    function handleClick() {
      dispatch(addUser(user));
      setUser(" ");
      addUserFirebase('admin', {user: user})
    }
    function showUsers() {
      dispatch(showUsers(getDatos()));
      console.log(showUsers(getDatos()));
    }
    const reset = () => {
      window.location.reload();
  }
    return (
      <>
        <div className='sub--title' data-testid='subTitle'>
            <h1>USERS LIST</h1>
            <div className='reset' onClick={reset}></div>
        </div>
        <nav className='admin--container'>
            <Link to='/pa' className = 'admin__button nav__link'>
                CreateProperty
            </Link> 
            <Link to='/propertyList' className = 'admin__button nav__link'>
                Property list
            </Link> 
        </nav>
        <div className='add--user--container'>
          <input
            type='text'
            className='email__field'
            onChange={handleChange}
            value={user}
            placeholder='Type new user'
            onKeyPress={handleEnterPressed}
          />
          <button
            type='button'
            onClick={handleClick}
            className='submit__button'
          >
            Add
          </button>
          <button
            className='submit__button'
            type="button"
            onClick={showUsers}
          >
            Show users
          </button>
        </div>
      </>
    );
  }
  
  export default UsersList;