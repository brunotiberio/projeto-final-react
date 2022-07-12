import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow-y: auto;

    width: 95%;

    margin: 10px auto;
`

export const CommentCard = styled.li`
    background-color: #D9D9D9;

    border-radius: 20px;

    padding: 1rem;

    width: 95%;
    height: 13rem;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;

    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    h3{
        font-size: 20px;
    }
`

export const Content = styled.div`
    display: flex;

    font-size: 25px;


    width: 95%;
    height: 60%;

    overflow-y: auto;
`