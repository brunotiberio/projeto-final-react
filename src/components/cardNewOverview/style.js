import styled from "styled-components";

export const Container = styled.button`
  display: flex;

  width: 95%;
  max-width: 800px;
  height: 11rem;

  margin: 10px auto;

  border-radius: 10px;
  border: none;

  background-color: #D9D9D9; 

  @media(min-width: 768px) {
    
  }
`;

export const ContentImg = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  max-width: 150px;

  border-right: 1px solid black;

  figure {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p{
    font-size: 16px;
    margin-left: 5px;
  }
  @media(min-width: 768px) {
        gap:20px;
    }
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 5px;

  padding: 7px 5px 5px 5px;

  div{

    border-radius: 10px;

    color: #FFFFFF;
    background-color: #240947;

    padding: 5px;
  }

  span{
    font-weight: 600;
  }
  @media(min-width: 768px) {
    padding-top: 15px;
  }
`;

export const ContentUser = styled.div`
  display: none;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;

    figure {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
      }
    }
  }
`;
