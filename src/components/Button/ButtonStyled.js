import styled from "styled-components";



const ButtonStyled = ( props ) => {

const changeMode = () => { 
  if (props.theme === 'light') {
    props.setTheme('dark'); 
  }else{
    props.setTheme('light')
  }
  }


  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox onClick = {() => changeMode()} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-right: 1em;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({theme}) => theme.txtcolor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({theme}) => theme.bgcolor};
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({theme}) => theme.txtcolor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`; 


export default ButtonStyled;
