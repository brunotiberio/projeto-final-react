import { Button } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  StyledButtomsContainer,
  StyledContactsContainer,
  StyledH3Container,
  StyledImgNameContainer,
  StyledProfileJournalistContainer,
} from "./style";
import "./style.css";

function CardJournalist() {
  const { user } = useContext(UserContext);

  return (
    <StyledProfileJournalistContainer>
      <StyledImgNameContainer>
        {user?.avatar ? (
          <figure>
            <img src={user?.avatar} alt={user?.name} />
          </figure>
        ) : (
          <div className="sem--avatar">
            <p>Adicione um Avatar</p>
          </div>
        )}

        <div>
          <h2>{user?.name}</h2>
          <h3>{user?.type}</h3>
        </div>
      </StyledImgNameContainer>
      <div>
        <h2>Contatos</h2>
        <StyledH3Container>
          <h3>Email</h3>
          <p>{user?.email}</p>
        </StyledH3Container>
        <StyledH3Container>
          <h3>Telefone</h3>
          <p>{user?.data?.phone}</p>
        </StyledH3Container>
      </div>
      <div>
        <StyledContactsContainer>
          <h2>Demais informações</h2>
          <div>
            {user?.data ? (
              <>
                <p>Endereço</p>
                <p>
                  {user?.data?.adress.street}, {user?.data?.adress.district},
                  {user?.data?.adress.cep}, {user?.data?.adress.city} -
                  {user?.data?.adress.state}
                </p>
              </>
            ) : (
              <p>
                Acesse á pagina de edição de perfil para completar seu cadastro.
              </p>
            )}
          </div>
        </StyledContactsContainer>
      </div>
      <StyledButtomsContainer>
        <Button variant="contained" size="small">
          Editar Perfil
        </Button>
      </StyledButtomsContainer>
    </StyledProfileJournalistContainer>
  );
}

export default CardJournalist;
