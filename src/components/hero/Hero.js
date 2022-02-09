import React, { useState } from 'react';
import './Hero.scss'

const Hero = () => {
    const [positionX, setPositionX] = useState(0)
    const [positionyY, setPositionY] = useState(0)
    const [display, setDisplay] = useState('none')
    

    const handleOnMouseOver = (e) => {
        setPositionX(e.clientX)
        setPositionY(e.clientY)
        setDisplay('block')

    };

    const handleOnMouseLeave = () => {
        setDisplay('none')
    };

    return (       
        <div className="mx-auto w-full flex flex-col md:flex-row pt-4 pb-4 border-b border-solid border-current">
            <div className="w-full pt-1 md:w-auto mr-2 overflow-hidden">
                <h1 className="text-hi w-full"> HI!</h1>
            </div>
            <div className="w-10/12 pt-1  overflow-hidden z-10 pl-2 md:pt-3 md:pl-5">
            <h1 className="text-title1 leading-8 mb-1 md:mb-2"> I’m&nbsp; 
                <span class="name cursor-pointer z-10" 
                    onMouseOver={ (event) => handleOnMouseOver(event)}
                    onMouseMove={ (event) => handleOnMouseOver(event)}
                    onMouseLeave={ () => handleOnMouseLeave()}>Gorka Plans</span> 
             &nbsp; a frontend developer and graphic designer</h1>
            <h1 className="text-title2 mb-1 md:mt-auto"> Basically I code and design things.</h1>
            <img
                style={{ display: display, left: positionX + `px`,  top: positionyY +60 + `px` }}
                className="person-img absolute w-1/4 "
                src="https://images.ctfassets.net/0ewb2pu3d932/5cnPEoL1F3Hle1tmytibgp/2044cf46feefc777883d7beaf4b99fec/gif_gorki-1.gif?h=250"
                alt="personaje"
      />
            </div>
        </div>
    );
};


export default Hero;