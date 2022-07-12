import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }
        
    button {
        cursor: pointer;

        &&:hover{
            filter: brightness(0.8)
        }
    }

    img{
        height: auto;
        max-width: 100%;
    }
    html {
        ${'' /* font-size:62.5%; */}
    }

    h1 {
        font-size:2rem;
    }
`

export const Container = styled.div`
display:flex;
justify-content: center;

gap:2em;
flex-direction: column;
align-items: center;

height:100%;
max-height:600px;

width:100%;
max-width: 90%;

margin: 0 auto;
padding:3em 1em;

background-color: #D9D9D9;

box-shadow: 32px 43px 58px -20px rgba(0,0,0,0.46);

border-radius:15px;
`
