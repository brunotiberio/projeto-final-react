import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h1 {
    color: white;
  }
`;

export const BoxArea = styled.div`
  display: flex;
  border-radius: 10px;

  background-color: white;

  textarea {
    border-radius: 10px;

    width: 90%;
    height: 7rem;

    padding: 1rem;

    border: none;
    outline: none;
  }

  div {
    display: flex;
    align-items: flex-end;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      color: white;

      border: none;
      border-radius: 100%;

      margin-bottom: 5px;

      width: 20px;
      height: 20px;

      background-color: #888888;
    }
  }
`;
