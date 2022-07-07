import { Button } from '@mui/material'
import React from 'react'
import { StyledButtomsContainer, StyledContactsContainer, StyledEmailContainer, StyledH3Container, StyledImgNameContainer, StyledPhoneContainer, StyledProfileJournalistContainer } from './style'


export default function CardJournalist() {
  return (    
    <StyledProfileJournalistContainer>
        <StyledImgNameContainer>
            <figure>
                <img src="https://yt3.ggpht.com/ytc/AKedOLQfhAtN42vThJKL3IA6_D1GeAtcx3Q1B69bY_hnp7Q=s900-c-k-c0x00ffffff-no-rj" alt="Perfil de Fulano de tal"  />
            </figure>
            <h2>Fulano de Tal</h2>
        </StyledImgNameContainer>
        <StyledH3Container>
            <h3>Contatos</h3>
        </StyledH3Container>        
        <StyledContactsContainer>
            <StyledPhoneContainer>
                <p>Telefone</p>
                <p>(99) 9 9999-9999</p>
            </StyledPhoneContainer>
            <StyledEmailContainer>
                <p>Email</p>
                <p>fulanodetal@gmail.com</p>
            </StyledEmailContainer>
        </StyledContactsContainer>
        <StyledButtomsContainer>
            <Button variant="contained" size="small"> Postagens </Button>
            <Button variant="contained" size="small"> Voltar </Button>
        </StyledButtomsContainer>
    </StyledProfileJournalistContainer>    
  )
}
