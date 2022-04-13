import React from 'react';
import background1 from '../images/background1.png';

const AboutUs = () => {
    return (
        <>
            <div className='about--title'>
                <div>
                    WE ARE THE BEST REAL ESTATE
                </div>
            </div>
            <div className='text--container'>
                <div className='company__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          
                </div>
            </div>
            <div className='image--container'>
                <img className='background1' src={background1} alt='delivering-keys'/>
            </div>
        </>
    );
};

export default AboutUs
;