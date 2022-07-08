import Pug from "./../../assets/PUG.jpg";

import {
  StyledUserCard,
  StyledUserTop,
  StyledUserOptions,
  StyledSaveChanges,
  StyledTitleAdress,
} from "./style";

import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreatorCompanyEdit({type }) {
  return (
    <StyledUserCard>
      <StyledUserTop>
        <Avatar alt="Remy Sharp" src={Pug} />
        <TextField
          id="standard-basic"
          label="Alterar Nome"
          placeholder={"nome "+type}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Alterar Numero"
          placeholder="(55) 00 00000-0000"
          variant="standard"
        />
      </StyledUserTop>
      <StyledTitleAdress>Endereço</StyledTitleAdress>
      <StyledUserOptions>
        <TextField id="standard-basic" label="cep" variant="standard" />
        <TextField id="standard-basic" label="estado" variant="standard" />
        <TextField id="standard-basic" label="bairro" variant="standard" />
        <TextField id="standard-basic" label="cidade" variant="standard" />
        <TextField id="standard-basic" label="rua" variant="standard" />
        <TextField id="standard-basic" label="numero" variant="standard" />
      </StyledUserOptions>
      <StyledSaveChanges>
        <Button
          sx={{ width: 250 }}
          variant="contained"
          onClick={() => console.log("salvar alterações")}
        >
          Salvar Alterações
        </Button>
      </StyledSaveChanges>
    </StyledUserCard>
  );
}
export default CreatorCompanyEdit;
