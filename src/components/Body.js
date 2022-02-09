import styled from "styled-components";

export const Body = styled.body`
    background-color: ${({theme}) => theme.bgcolor};
    color: ${({theme}) => theme.txtcolor} ;
    min-height: 100vh;
`

