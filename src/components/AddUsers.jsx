import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/addUserActionCreator';
import { addUserFirebase } from "../firebase/dbactions";
import firebase from "firebase/compat/app";

function AddUsers() {
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
    }
    function handleClick() {
      dispatch(addUser(user));
      setUser(" ");
      addUserFirebase('admin', {user: user})
      getDatos();
    }
    return (
      <>
        <div>
            <Link to='/pa' className="nav__link">
                Back<span>&#8617;</span>
            </Link>
          <input
            type="text"
        
            onChange={handleChange}
            value={user}
            placeholder="Write your user"
            onKeyPress={handleEnterPressed}
          />
          <button

            type="button"
            onClick={handleClick}
          >
            Add
          </button>
          
        </div>
      </>
    );
  }
  
  export default AddUsers;

   /*{getDatos() && getDatos().length > 0 ? (
              <div>
                <ol>
                  {getDatos()?.map((user) => (
                    <UserItem key={user.id} user={user} />
                  ))}
                </ol>
              </div>
            ) : (
              <EmptyUsersList />
            )}*/