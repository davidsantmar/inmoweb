import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usersData } from '../firebase/index';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { ref, getStorage, deleteObject } from 'firebase/storage';


function UsersList() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(usersData, 'users_admin');
  const [showModal, setShowModal] = useState(false); 
  const [deletedUser, setDeletedUser] = useState('');

  const handleEnterPressed = (event) => {
    if(event.key === 'Enter'){
        handleClick();        
    }
  }
  const handleClick = async () => {
    await addDoc(usersCollectionsRef, {
      user: user,
    })
    reset();
  }
  const showUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }
  const deleteUser = async (id) => {
    setShowModal(true);
    const userDoc = doc(usersData, 'users_admin', id);
    await deleteDoc(userDoc);  
  }
  const handleDeleteModalClose = (e) => {
    setShowModal(false);
  }
  const reset = () => {
    window.location.reload();
  }
  return(
      <>
      <div className='users--list'>
        <div className='sub--title' data-testid='subTitle'>
            <h1>USERS LIST</h1>
            <div className='reset' onClick={reset}></div>
        </div>
        <nav className='admin--container'>
            <Link to='/createProperty' className = 'admin__button nav__link'>
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
            onChange={(event) => {
              setUser(event.target.value);
            }}     
            placeholder='Type new user'
            onKeyPress={handleEnterPressed}
          />
          <button
            type='button'
            onClick={handleClick}
            className='submit__button'
          >
            <strong className='add__symbol'>&#x2B;</strong>
          </button>
          <button
            className='submit__button'
            type="button"
            onClick={showUsers}
          >
            Show granted users
          </button>
        </div>
        <div className='users'>
          {users.map((user, i) =>{
            return(
              <>
                <div className='user__view' key={i}>
                  <span className='user__email'>{user.user}</span>
                  <button className='delete__user' 
                    onClick={() => deleteUser(user.id)}
                  >
                    &#10060;
                  </button>
                </div>
              </>
            )
          })
        }
        </div>
        <div hidden={!showModal} className='modal'> 
                <div className='modal__pa__background' onClick={handleDeleteModalClose}>
                    <div className='modal__pa__card'>
                        <h2 className='modal__pa__title'>Are you sure?</h2>
                        <div className='modal--buttons--container'>
                            <button className='modal__delete__button' 
                                onClick={() => {deleteUser(deletedUser)}}
                            >
                                Delete
                            </button>
                            <button className='modal__cancel__button'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
    );
};
  
export default UsersList;