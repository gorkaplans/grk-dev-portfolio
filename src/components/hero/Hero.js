import React from 'react';
import './Hero.scss'

const Hero = () => {
    return (       
        <div className="mx-auto w-full flex pt-4 pb-4 border-b border-solid border-current">
            <div className="w-2/12 mr-2 overflow-hidden">
                <h1 className="text-hi w-full"> HI!</h1>
            </div>
            <div className="w-10/12 pt-1 overflow-hidden md:pt-3">
            <h1 className="text-title1 mb-1 md:mb-2"> I’m a frontend developer and designer</h1>
            <h1 className="text-title2"> Basically I code and design things.</h1>
            </div>
        </div>
    );
};


export default Hero;