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

export const BoxArea = styled.form`
  display: flex;

  align-items: center;

  justify-content: space-between;

  border-radius: 10px;

  width: 60%;

  max-width: 250px;

  background-color: white;

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

      margin-right: 7px;
      margin-bottom: 5px;

      width: 20px;
      height: 20px;

      background-color: #888888;
    }
  }
`;
