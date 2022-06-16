import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/actions/addUserActionCreator';
import { addUserFirebase } from "../firebase/dbactions";


function AddUsers() {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const userAdded = useSelector((state) => state.movieSelected);

  
    function handleChange(event) {
      setUser(event.target.value);
    }
    const handleEnterPressed = (event) => {
      if(event.key === 'Enter'){
          handleClick();        
      }
  }
  
    function handleClick() {
      dispatch(addUser(user));
      setUser(" ");
      console.log(user);
      addUserFirebase(userAdded, {
        user: user, 
      });
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
            disabled={!user.trim()}
            onClick={handleClick}
          >
            Add
          </button>
          {user}
        </div>
      </>
    );
  }
  
  export default AddUsers;