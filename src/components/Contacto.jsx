import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';


const Contacto = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_6ilyu6d',
            'template_h7gucd8',
            toSend,
            'mZFlYH32MWGNn7UKB'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });     
        };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
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
            <form className='form--container' onSubmit={onSubmit}>
                <input
                    className='name__field'
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    className='request__field'
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    className='email__field'
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button 
                    className='submit__button' 
                    type='submit'
                />
                    Submit
            </form>
        </>
    );
};

export default Contacto;