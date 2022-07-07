import { createGlobalStyle } from "styled-components";
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
`
