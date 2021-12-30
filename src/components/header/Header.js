import React from 'react'; 
import'./Header.scss'

/* import Button from '../Button/Button'; */

import ButtonStyled from '../Button/ButtonStyled'


const Header = (props) => {

    return (
        <>
        <div className="mx-auto w-full flex pt-8 pb-4 border-b border-solid border-current">
            <h1 className="text-light mr-auto">Gorka Plans</h1>
             <ButtonStyled theme={props.theme} setTheme={props.setTheme} className="mr-4"></ButtonStyled>
            <h1 className="text-light pr-4">Resume</h1>
            <h1 className="text-light">Contact</h1>
        </div>
        
        </>    
    ) } 
  
  export default Header