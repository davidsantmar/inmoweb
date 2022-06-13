import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/addUserActionCreator';

const AddUser = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    
    function handleChange(event) {
        setUser(event.target.value);
    }  
    function addUser(){
        dispatch(addUser(user));
        console.log(user);
    }  
    return (
        <>
        <div className='add--user--container'>
            <Link to='/pa' className="nav__link">
                Back<span>&#8617;</span>
            </Link>
            <form>
            <br />
            <input
                className='title__field'
                type='text'
                placeholder='User email'
                data-testid='title-field'
                onChange={handleChange}
                >
            </input>
            <br />
            </form>
            <button 
                className='submit__button' 
                type='submit'
                data-testid='submit-button'
                onClick={addUser}
            >
                    ADD USER
            </button>
            <div>Actual users</div>
            <br />
        </div>
        </>
    );
};

export default AddUser;