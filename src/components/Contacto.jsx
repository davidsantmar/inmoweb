import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { login } from '../firebase/actions';
import { useDispatch } from 'react-redux';
import { accessGranted } from '../redux/actions/administratorActionCreator';


/*
para envio  de form a email usando cliente emailJS:
crear cuenta con emailJS
activar gmail y create new
crear form y métodos
asignar datos de la cuenta de emailJS a método send
unique id, template y private key
*/

const Contacto = () => {
  const [emailAccess, setEmailAccess] = useState('');
  const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
    const dispatch = useDispatch();
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
    async function getEmail() {
        const result = await login();
        dispatch(accessGranted);
        //login();
        //setEmailAccess(result);
        console.log(result) 
        //paAccess();       
        //return result;
    }
    async function paAccess(){
        const email = await getEmail();
        setEmailAccess(email);
        console.log(emailAccess);      

        /*if (email === 'davidsantmar@gmail.com'){
            console.log('si')
    }
        else{
            console.log('access not authorised')
        } */   
    }

    return (
        <>
        <div className='sub--title' data-testid='subTitle2'>
                <h2>CONTACT FORM</h2>
            </div>
            <form className='form--container' 
            onSubmit={onSubmit} 
            data-testid='form-container'>
                <input
                    className='name__field'
                    type='text'
                    name='from_name'
                    placeholder='Type your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    data-testid='name-field'
                />
                <br />
                <br />
                <input
                    className='email__field'
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    data-testid='email-field'
                />
                <br />
                <br />
                <textarea
                    className='text__field'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    data-testid='message-field'
                />
                <br />
                <br />
                <button 
                    className='submit__button' 
                    type='submit'
                    data-testid='submit-button'
                >
                    SUBMIT
                </button>
            </form>
            <div className='sub--title' data-testid='subTitle1'>
                <h4>CONTACT DETAILS</h4>
            </div>
            <div className='contact--details' data-testid='contact-details'>
                Pl. Catalunya, 1<br />
                Barcelona <br />
                Spain<br />
                loremipsum@loremipsum.com<br />
            </div>
            <div class="google--map" data-testid='google-map'>
                <iframe className='map__frame' title='google-map'
                src="https://maps.google.com/maps?q=plaza%20catalunya,%201%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
            <div className='admin--container'>
                <button className='admin__button' 
                onClick={getEmail} 
                data-testid='admin-button'>
                    <Link to='/pa'>ADMINISTRATOR</Link>  
                </button>
            </div>
        </>
    );
};

export default Contacto;