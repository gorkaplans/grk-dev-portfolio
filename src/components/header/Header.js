import React from 'react'; 
import'./Header.scss'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";


import ButtonStyled from '../Button/ButtonStyled'


const Header = (props) => {

    return (
        <>
        <div className="mx-auto w-full flex items-center pt-8 pb-4 border-b border-solid border-current">
            <h1 className="text-light mr-auto">Gorka Plans</h1>
             <ButtonStyled theme={props.theme} setTheme={props.setTheme} className="mr-4"></ButtonStyled>
             {props.theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill /> } 
        </div>
        
        </>    
    ) } 
  
  export default Header