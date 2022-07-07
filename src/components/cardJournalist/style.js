import styled from "styled-components";

export const StyledProfileJournalistContainer = styled.div`
    width: 90vw;
    height: 80vh;

    margin: auto;
    margin-top: 30px;

    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const StyledImgNameContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    figure{
        width: 200px;
        height: 200px;  

        img{
            width: 100%;
        
            border-radius: 100%;
        }
    }

    @media (min-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 85%;        

        h2{
            margin-left: 20px;
        }
    }
`

export const StyledH3Container = styled.div`
        @media (min-width: 1000px){
            width: 85%;
        }
`

export const StyledContactsContainer = styled.div`
    height: 30%;
    width: 85%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3{
        text-align: center;
    }

    @media (min-width: 1000px){
        h3{
            text-align: left;
        }
    }
`

export const StyledPhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledButtomsContainer = styled.div`
    height: 15%;
    width: 85%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        button{
            margin-left: 30px;
        }
    }
`



