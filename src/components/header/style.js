import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0px 5%; 
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  padding-top: 10px;

  height: 100px;

  img{
    margin-right: 10px;

    width: 30px;
    height: 30px;

    @media (min-width: 420px){
      width: 50px;
      height: 50px;
    }    
  }

  h1{
    font-size: 11px;

    @media (min-width: 420px){
      font-size: 15px;
    }
  }

`;

export const StyledHeaderList = styled.div`
  margin: 20px 10px;
`;
