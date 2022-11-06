import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

/*
para envio  de form a email usando cliente emailJS:
crear cuenta con emailJS
activar gmail y create new
crear form y métodos
asignar datos de la cuenta de emailJS a método send
unique id, template y private key
*/
const Contact = () => {
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
        <div className='contact'>
            <div className='sub--title' data-testid='subTitle2'>
                <h2>CONTACT FORM</h2>
            </div>
                <form className='contact--container' 
                onSubmit={onSubmit} 
                data-testid='form-container'>
                    <input
                        className='name__field'
                        type='text'
                        name='from_name'
                        placeholder=' Type your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                        data-testid='name-field'
                    />
                    <input
                        className='email__field'
                        type='text'
                        name='reply_to'
                        placeholder=' Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                        data-testid='email-field'
                    />
                    <textarea
                        className='request__field'
                        name='message'
                        placeholder=' Your message'
                        value={toSend.message}
                        onChange={handleChange}
                        data-testid='message-field'
                    />
                    <button 
                        className='submit__button' 
                        type='submit'
                        data-testid='submit-button'
                    >
                        SUBMIT
                    </button>
                </form>
                <div className='sub--title' data-testid='subTitle1'>
                    <h2>CONTACT DETAILS</h2>
                </div>
                <div className='contact--details' data-testid='contact-details'>
                    <ul className='details__list'>
                        <li>Pl. Catalunya, 1</li>
                        <li>Barcelona</li>
                        <li>Spain</li>
                        <li>loremipsum@loremipsum.com</li>
                        <li>935551122</li>
                    </ul>
                    <div className='social__media'>
                        <a className='insta' href='https://www.instagram.com' target="_blank" alt='instagram logo'></a>
                        <a className='face' href='https://www.facebook.com' target="_blank" alt='facebook logo'></a>
                        <a className='twit' href='https://www.twitter.com' target="_blank" alt='twitter logo'></a>
                    </div>
                </div>
                <div className='google--map' data-testid='google-map'>
                    <iframe className='map__frame' title='google-map'
                    src='https://maps.google.com/maps?q=plaza%20catalunya,%201%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed'>
                    </iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;