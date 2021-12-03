import React from 'react'; 

import'./Footer.scss'




const Footer = () => {

    return (
        <>
        <div className="mx-auto w-full flex flex-col items-center pt-8 pb-4 justify">
            <h1 className="text-light justify">You can find me on 
            <a href="https://github.com/gorkaplans" target="_blank" rel="noreferrer" className="text-medium"> github</a>, 
            follow me on 
            <a href="https://www.instagram.com/gorkaplans/?hl=es" target="_blank" rel="noreferrer" className="text-medium"> instagram </a> 
            or you can 
            <a href="gorkaplans@gmail.com" target="_blank" rel="noreferrer" className="text-medium"> mail </a> 
            me! </h1>
            <h1 className="text-medium mt-8 justify"> :)</h1>
        </div>
        
        </>    
    ) } 
  
  export default Footer