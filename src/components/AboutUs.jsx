import React from 'react';
import background1 from '../images/background1.png';

const AboutUs = () => {
    return (
        <>
            <div className='about--us'>
                <div className='sub--title' data-testid='subTitle'>
                    <h2>
                        WE ARE THE BEST REAL ESTATE
                    </h2>
                </div>
                <div className='text--container' data-testid='companyDescription'>
                    <div className='company__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          
                    </div>
                </div>
                <div className='image--container'>
                    <img className='background1' src={background1} alt='delivering-keys' data-testid='backgroundImage'/>
                </div>
            </div>
        </>
    );
};

export default AboutUs;