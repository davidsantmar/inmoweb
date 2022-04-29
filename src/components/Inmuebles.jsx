import React, { useState } from 'react';
import flat1 from '../images/flat1.png';
import flat2 from '../images/flat2.jpeg';
import flat3 from '../images/flat3.jpeg';
import flat4 from '../images/flat4.jpeg';
import { Link } from "react-router-dom";





const Inmuebles = () => {
    const [firstFlat, setFirstFlat] = useState();
    const [secondFlat, setSecondFlat] = useState();
    const [thirdFlat, setThirdFlat] = useState();
    const [fourthFlat, setFourthFlat] = useState();

    function cheaperButton(){
        const orderedFlats = [4, 2, 5, 1, 3];
        document.getElementById

        numbers.sort(function(a, b) {
          return a - b;
        });
    }
    return (
        <>
        <div className='filter--container'>
            <button className='cheaper__button'>Cheaper</button>
            <button className='relevance__button'>Relevance</button>
        </div>
        <div className='flats--grid'>
            <div className='card' id='1'>
                <div className='card__picture__container'>
                    <div className='card__picture'>
                        <img className='flat1' src={flat1} alt='flat'/>
                    </div>
                </div>
                <div className='card__description'>
                    Fantastic flat in Balmes street
                </div>
                <span className='card__price'>300.000 €</span>
                <div className='card__features'>4 hab.  110 m2  elevator</div>
                <hr className='card__hr'/>
                <div className='card__contact'>
                    <Link to="/contacto" className='nav__link'>
                        Contacto
                        <span className='contact__icon'>&#128196;</span>
                    </Link>
                </div>
            </div>
            <div className='card' id='2'>
                <div className='card__picture__container'>
                    <div className='card__picture'>
                        <img className='flat2' src={flat2} alt='flat'/>
                    </div>
                </div>
                <div className='card__description'>
                    Fantastic flat in Balmes street
                </div>
                <span className='card__price'>400.000 €</span>
                <div className='card__features'>4 hab.  110 m2  elevator</div>
                <hr className='card__hr'/>
                <div className='card__contact'>
                    <Link to="/contacto" className='nav__link'>
                        Contacto
                        <span className='contact__icon'>&#128196;</span>
                    </Link>
                </div>
            </div>
            <div className='card' id='3'>
                <div className='card__picture__container'>
                    <div className='card__picture'>
                        <img className='flat3' src={flat3} alt='flat'/>
                    </div>
                </div>
                <div className='card__description'>
                    Fantastic flat in Balmes street
                </div>
                <span className='card__price'>410.000 €</span>
                <div className='card__features'>4 hab.  110 m2  elevator</div>
                <hr className='card__hr'/>
                <div className='card__contact'>
                    <Link to="/contacto" className='nav__link'>
                        Contacto
                        <span className='contact__icon'>&#128196;</span>
                    </Link>
                </div>
            </div>
            <div className='card' id='4'>
                <div className='card__picture__container'>
                    <div className='card__picture'>
                        <img className='flat4' src={flat4} alt='flat'/>
                    </div>
                </div>
                <div className='card__description'>
                    Fantastic flat in Balmes street
                </div>
                <span className='card__price'>420.000 €</span>
                <div className='card__features'>4 hab.  110 m2  elevator</div>
                <hr className='card__hr'/>
                <div className='card__contact'>
                    <Link to="/contacto" className='nav__link'>
                        Contacto
                        <span className='contact__icon'>&#128196;</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Inmuebles;