import { useState } from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';

function PA() {
  const propertiesCollectionsRef = collection(db, 'properties');
  const [newRef, setNewRef] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMeters, setNewMeters] = useState(0);
  const [newRooms, setNewRooms] = useState(0);
  const [newExtras, setNewExtras] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const createProperty = async () =>{
    await addDoc(propertiesCollectionsRef, {
      ref: Number(newRef), 
      title: newTitle,
      description: newDescription,
      meters: newMeters,
      rooms: newRooms,
      extras: newExtras,
      price: newPrice,   
    })
  }

  return (
    <>
    <div className="PA--form">
         <div className='sub--title' data-testid='subTitle'>
            <h1>CREATE PROPERTY</h1>
        </div>
        <nav className='admin--container'>
            <Link to='/propertyList' className = 'admin__button nav__link'>
                Property list
            </Link> 
            <Link to='/addUser' className = 'admin__button nav__link'>
                Users management
            </Link> 
        </nav>
      <div className='create--property--container' data-testid='form-container'>
        <input className='ref__field'
          type='number'
          placeholder='Reference'
          data-testid='ref-field'
          onChange={(event) => {
          setNewRef(event.target.value);
        }}></input>
        <input className='title__field'
          type='text'
          placeholder='Title'
          data-testid='ref-field' 
          onChange={(event) => {
          setNewTitle(event.target.value);
        }}></input>
        <textarea className='text__field'
          type='text-area'
          placeholder='Description'
          data-testid='text-field'
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}></textarea>
        <input className='meters__field'
          type='number'
          placeholder='Meters'
          data-testid='meters-field'
          onChange={(event) => {
            setNewMeters(event.target.value);
        }}></input>
        <input className='rooms__field'
          type='number'
          placeholder='Rooms'
          data-testid='rooms-field'
          onChange={(event) => {
            setNewRooms(event.target.value);
        }}></input>
        <input className='extras__field'
          type='text'
          placeholder='Extras'
          data-testid='extras-field'
          onChange={(event) => {
            setNewExtras(event.target.value);
        }}></input>
        <input className='price__field'
          type='number'
          placeholder='Price'
          data-testid='price-field'
          onChange={(event) => {
            setNewPrice(event.target.value);
        }}></input>
        <button onClick={createProperty} 
        className='submit__button' 
        type='submit'
        data-testid='submit-button'
        >
          Post
        </button>
      </div>
    </div>
    </>
  );
}

export default PA;