import React from 'react';

const Contacto = () => {
    return (
        <>
            <div className='sub--title'>
                <h2>CONTACT DETAILS</h2>
            </div>
            <div className='contact--details'>
                Pl. Catalunya, 1<br />
                Barcelona <br />
                Spain<br />
                loremipsum@loremipsum.com<br />
            </div>
            <div class="google--map">
                <iframe className='map__frame' title='google-map'
                src="https://maps.google.com/maps?q=plaza%20catalunya,%201%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
            <div className='sub--title'>
                <h4>CONTACT FORM</h4>
            </div>
            <form className='form--container'>
                <label for="fname">Name: </label>
                <br />
                <input className='name__field' type="text" placeholder='Type your name'></input>
                <br />
                <label for="email">Email: </label>
                <br />
                <input className='email__field' type="email" placeholder='@'></input>
                <br />
                <label for="request">Request: </label>
                <br />
                <input className='request__field' type="text" id="request" name="request" ></input>
                <br />
                <br />
                <div className='submit__button'>Submit</div>
            </form>
        </>
    );
};

export default Contacto;