import styled from "styled-components";
export const StyledUserCard = styled.div`
    display:flex;
    flex-flow: column nowrap;
    width:90%;
    gap:10px;
    margin: 10px 0px;
    height: 90vh;


    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
`
export const StyledUserTop = styled.div`
    display:flex;
    gap:30px;
    margin:15px;
    @media (max-width: 500px){
        input{
            width:100%
        }
    }
`
export const StyledUserOptions = styled.div`
    display:flex;
    flex-flow: column nowrap;
    gap:30px;
    margin:15px;
    @media (max-width: 500px){
        button{
            width:100%
        }
    }
`
export const StyledSaveChanges= styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    margin:15px;
`
