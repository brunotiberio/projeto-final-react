import styled from "styled-components";

export const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    width: 95vw;
    height: 98%;

    border-radius: 10px;

    margin-top: 1vh;
    
    color:#FFFFFF;
    background-color: #281E1E;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;
        padding: 0 .7rem;

        overflow-y: auto;

    }
`

export const AuthContent = styled.div`
    display: flex;
    justify-content: flex-end;

    padding-right: .5rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10px ;

    figure{
        display: flex;
        flex-direction: column;

        gap: 5px;

        img{
            border-radius: 10px;
        }
    
        figcaption{
            font-size: 5px;
        }
    }
`
export const NewsRatings=styled.div`

`
export const NewsButtons=styled.div`

`

export const NewsButtonCreator = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;   
    border-radius: 10px;

    width: 5rem;
    height: 2rem;

`

export const NewsButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    
    gap: 25px;

    width: 100%;
`

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    width: 95%;
    margin: 10px auto;

    gap: 15px;
`


