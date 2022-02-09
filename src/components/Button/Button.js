import React from "react";

import "./Button.scss";

const Button = (props) => {

const changeMode = () => { 
    if (props.theme === 'light') {
      props.setTheme('dark'); 
    }else{
      props.setTheme('light')
    }
    }
  return (
      <div>
        <div className="CheckBoxWrapper">
          <input onClick = {() => changeMode()} id="checkbox" type="checkbox" className="CheckBox"></input>
          <label htmlFor="checkbox" className="CheckBoxLabel"></label>
        </div>
      </div>
  );
};

export default Button;
