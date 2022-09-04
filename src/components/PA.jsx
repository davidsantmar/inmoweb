import { useState, useEffect } from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function PA() {
  const [properties, setProperties] = useState([]);
  const propertiesCollectionsRef = collection(db, 'properties');
  const [newRef, setNewRef] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');


  const createProperty = async () =>{
    await addDoc(propertiesCollectionsRef, {ref: Number(newRef), title: newTitle})
  }
  const updateTitle = async (id) => {
    const propertyDoc = doc(db, 'properties', id);  //documento de la coleccion
    const newFields = {title : updatedTitle};  //actualización 
    await updateDoc(propertyDoc,newFields)
  }
  const deleteProperty = async (id) => {
    const propertyDoc = doc(db, 'properties', id);
    await deleteDoc(propertyDoc);
  }

useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertiesCollectionsRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }
    getProperties();  
  }, []);


  return (
    <>
    <div className="PA--form">
         <div className='sub--title' data-testid='subTitle'>
            <h2>POSTING ADMINISTRATOR</h2>
        </div>
        <nav className='admin--container'>
            <Link to='/propertyList' className = 'admin__button nav__link'>
                Property list
            </Link> 
            <Link to='/addUser' className = 'admin__button nav__link'>
                Users management
            </Link> 
        </nav>
    <div className='form--container' data-testid='form-container'>
      <input className='ref__field'
        type='number'
        placeholder='Reference'
        data-testid='ref-field'onChange={(event) => {
        setNewRef(event.target.value);
      }}></input>
      <input className='title__field'
        type='text'
        placeholder='Title'
        data-testid='ref-field' onChange={(event) => {
        setNewTitle(event.target.value);
      }}></input>
      <textarea className='text__field'
        type='text-area'
        placeholder='Description'
        data-testid='text-field' 
      ></textarea>
      <input className='meters__field'
        type='number'
        placeholder='Meters'
        data-testid='meters-field'onChange={(event) => {
        setNewRef(event.target.value);
      }}></input>
      <input className='rooms__field'
        type='number'
        placeholder='Rooms'
        data-testid='rooms-field'onChange={(event) => {
        setNewRef(event.target.value);
      }}></input>
      <input className='extras__field'
        type='text'
        placeholder='Extras'
        data-testid='extras-field'onChange={(event) => {
        setNewRef(event.target.value);
      }}></input>
      <input className='price__field'
        type='number'
        placeholder='Price'
        data-testid='price-field'onChange={(event) => {
        setNewRef(event.target.value);
      }}></input>

      <button onClick={createProperty} 
      className='submit__button' 
      type='submit'
      data-testid='submit-button'
      >
        Create property
      </button>
    </div>
      {properties.sort(function (a, b) {   //hay que llevarselo a PropertyList
          return a.ref - b.ref;            //map sorted
      })
      .map((property) => { 
        return (
          <div>
            <span>Property: {property.ref}</span>
            <br />
            <span>Title: {property.title}</span>
            <br />
            <span>Description: {property.description}</span>
            <br />
            <span>Meters: {property.meters}</span>
            <br />
            <span>Rooms: {property.rooms}</span>
            <br />
            <span>Extras: {property.extras}</span>
            <br />
            <span>Price: {property.price}</span>
            <br />
            <input placeholder='new title' onChange={(event) => {
                setUpdatedTitle(event.target.value);
            }}></input>
            <br />
            <button onClick={() => {updateTitle(property.id)}}>Change title</button>
            <button onClick={() => {deleteProperty(property.id)}}>Delete property</button>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default PA;











/*
import React, {useState, useEffect} from 'react';
import { addProperty } from "../firebase/dbactions";
import { Link } from "react-router-dom";
import { db } from '../firebase/index';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



const PA = () => {
    const [properties, setProperties] = useState([]);
    const propertiesCollectionsRef = collection(db, 'properties');
    const [ref, setRef] = useState('');
    const [newRef, setNewRef] = useState(0);
    const [newTitle, setNewTitle] = useState('');
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rooms, setRooms] = useState(1);
    const [m2, setM2] = useState(60);
    const [price, setPrice] = useState(100000);
    const [extras, setExtras] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
          const data = await getDocs(propertiesCollectionsRef);
          setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      }
        getProperties();  
      }, []);

    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            post();            
        }
    }
    function handleChangeRef(event) {
        setRef(event.target.value);
    }
    const handleChangeTitle = (event) =>{
        setTitle(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleChangeRooms = (event) =>{
        setRooms(event.target.value);
    }
    const handleChangeMeters = (event) => {
        setM2(event.target.value);
    }
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    }
    const handleChangeExtras = (event) => {
        setExtras(event.target.value);
    }
    const post = async () =>{
        await addDoc(propertiesCollectionsRef, {ref: Number(newRef), title: newTitle})
      }
    
    return (
        <>
        <div className='PA--form'>
            <div className='sub--title' data-testid='subTitle'>
                <h2>POSTING ADMINISTRATOR</h2>
            </div>
            <nav className='admin--container'>
                <div className='admin__button'>
                    Create property
                </div>
                <div className='admin__button'>
                    Property list
                </div>
                <Link to='/addUser' className="nav__link">
                    Users management
                </Link> 
            </nav>
            <form className='form--container' data-testid='form-container'>
                <input
                    className='ref__field'
                    type='text'
                    placeholder='Type the reference'
                    data-testid='ref-field'
                    onChange={handleChangeRef}
                >
                </input>
                <br />
                <br />
                <input
                    className='title__field'
                    type='text'
                    placeholder='Title'
                    data-testid='title-field'
                    onChange={handleChangeTitle}
                >
                </input>
                <br />
                <br />
                <textarea
                    className='text__field'
                    type='text'
                    placeholder='Description'
                    data-testid='description'
                    onChange={handleChangeDescription}
                >
                </textarea>
                <br />
                <br />
                <div className='rooms--title' data-testid='rooms-title'>
                    Rooms
                    <div className='rooms--container' data-testid='rooms-container' onChange={handleChangeRooms}>
                        {rooms}
                    </div>
                </div>
                <br />
                <br />
                <div className='sqmt--title' data-testid='sqmt-title'>
                    m2
                    <div className='square--meters--container' data-testid='square-meters-container' onChange={handleChangeMeters}>
                        {m2}
                    </div>
                </div>
                <br />
                <br />
                <div className='price--title' data-testid='price-title'>
                    Price
                    <div className='price--container' data-testid='price-container' onChange={handleChangePrice}>
                        {price}
                    </div>
                </div>
                <br />
                <br />
                <input
                    className='extras__field'
                    type='text'
                    placeholder='Extras'
                    data-testid='extras-field'
                    onChange={handleChangeExtras}
                    onKeyPress={handleEnterPressed}
                >
                </input>
                <br />
                <br />
                <input
                    className='pictures__field'
                    type='file'
                    multiple
                    data-testid='pictures-field'
                    //onChange={handleChange}
                >
                </input>
                <br />
                <br />
                <button 
                    className='submit__button' 
                    type='submit'
                    data-testid='submit-button'
                    onClick={post}
                >
                    POST
                </button>
            </form>
        </div>
        </>
    );
};

export default PA;*/