import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
        button{
            cursor: pointer;

            &&:hover{
                filter: brightness(0.8)
            }
        }
    }

html {
    font-size:62.5%;
}
`

export const Container = styled.div`
width: 25vw;
height: 85vh;
display:flex;
flex-direction: column;
align-self: center;
margin: 2rem auto;
background-color: #D9D9D9;

@media(max-width: 960px) {
    width: 55vw;
}
`

export const Title = styled.h1`
    font-size: 1.;
`