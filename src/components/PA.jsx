import React, {useState} from 'react';

const PA = () => {
    const [rooms, setRooms] = useState(1);
    const [m2, setM2] = useState(60);

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

    return (
        <div className='PA--form'>
            <div className='sub--title'>
                <h2>POSTING ADMINISTRATOR</h2>
            </div>
            <form className='form--container'>
                <input
                    className='title__field'
                    type='text'
                    placeholder='Title'>
                </input>
                <br />
                <br />
                <textarea
                    className='text__field'
                    type='text'
                    placeholder='Description'>
                </textarea>
                <br />
                <br />
                <div className='rooms--title'>
                    Rooms
                    <div className='rooms--container'>
                        <span className='change__numbers__buttons' onClick={removeRooms}>-</span>
                        {rooms}
                        <span className='change__numbers__buttons' onClick={addRooms}>+</span>                
                    </div>
                </div>
                <br />
                <br />
                <div className='sqmt--title'>
                    m2
                    <div className='square--meters--container'>
                        <span className='change__numbers__buttons' onClick={removeM2}>-</span>
                        {m2}
                        <span className='change__numbers__buttons' onClick={addM2}>+</span>                
                    </div>
                </div>
                <br />
                <br />
                <input
                    className='pictures__field'
                    type='file'
                    multiple>
                </input>
                <br />
                <br />
                <button 
                    className='submit__button' 
                    type='submit'
                >
                    POST
                </button>
            </form>
        </div>
    );
};

export default PA;