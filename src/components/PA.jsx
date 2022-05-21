import React, {useState} from 'react';
import {  useSelector } from "react-redux";
import { addProperty } from "../firebase/dbactions";


const PA = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rooms, setRooms] = useState(1);
    const [m2, setM2] = useState(60);
    const [price, setPrice] = useState(100000);
    const [extras, setExtras] = useState('');
    const [images, setImages] = useState([]);

    const addRooms = () => {
        setRooms(rooms + 1);
    }
    const removeRooms = () => {
        setRooms(rooms - 1);
    }
    const addM2 = () => {
        setM2(m2 + 1);
    }
    const removeM2 = () => {
        setM2(m2 - 1);
    }
    const addPrice = () => {
        setPrice(price + 1000);
    }
    const removePrice = () => {
        setM2(price - 1000);
    }
    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            handleClick();        
        }
    }
    function handleChange(event) {
        setId(event.target.value);
        setTitle(event.target.value);
        setDescription(event.target.value);
        setRooms(event.target.value);
        setM2(event.target.value);
        setPrice(event.target.value);
        setExtras(event.target.value);
        setImages(event.target.value);

      }
    function handleClick() {
        addProperty({
          propertyId: id,
          title: title,
          description: description, // TODO TRAER DEL STORE O DE FIREBASE
          rooms: rooms,
          m2: m2,
          price: price,
          extras: extras,
          images: images,
    });
        //setMessage("");
      }
    return (
        <div className='PA--form'>
            <div className='sub--title' data-testid='subTitle'>
                <h2>POSTING ADMINISTRATOR</h2>
            </div>
            <form className='form--container' data-testid='form-container'>
                <input
                    className='id__field'
                    type='text'
                    placeholder='Id'
                    data-testid='id-field'
                    onChange={handleChange}
                >
                </input>
                <br />
                <br />
                <input
                    className='title__field'
                    type='text'
                    placeholder='Title'
                    data-testid='title-field'
                    onChange={handleChange}
                >
                </input>
                <br />
                <br />
                <textarea
                    className='text__field'
                    type='text'
                    placeholder='Description'
                    data-testid='description'
                    onChange={handleChange}
                >
                </textarea>
                <br />
                <br />
                <div className='rooms--title' data-testid='rooms-title'>
                    Rooms
                    <div className='rooms--container' data-testid='rooms-container' onChange={handleChange}>
                        <span className='change__numbers__buttons' 
                        onClick={removeRooms} 
                        >-</span>
                        {rooms}
                        <span className='change__numbers__buttons' 
                        onClick={addRooms}
                        >+</span>                
                    </div>
                </div>
                <br />
                <br />
                <div className='sqmt--title' data-testid='sqmt-title'>
                    m2
                    <div className='square--meters--container' data-testid='square-meters-container' onChange={handleChange}>
                        <span className='change__numbers__buttons' onClick={removeM2}>-</span>
                        {m2}
                        <span className='change__numbers__buttons' onClick={addM2}>+</span>                
                    </div>
                </div>
                <br />
                <br />
                <div className='price--title' data-testid='price-title'>
                    Price
                    <div className='price--container' data-testid='price-container' onChange={handleChange}>
                        <span className='change__numbers__buttons' onClick={removePrice}>-</span>
                        {price}
                        <span className='change__numbers__buttons' onClick={addPrice}>+</span>                
                    </div>
                </div>
                <br />
                <br />
                <input
                    className='extras__field'
                    type='text'
                    placeholder='Extras'
                    data-testid='extras-field'
                    onChange={handleChange}
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
                    onChange={handleChange}
                >
                </input>
                <br />
                <br />
                <button 
                    className='submit__button' 
                    type='submit'
                    data-testid='submit-button'
                    onClick={handleClick}
                >
                    POST
                </button>
            </form>
        </div>
    );
};

export default PA;