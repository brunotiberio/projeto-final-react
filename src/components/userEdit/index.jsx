import Pug from "./../../assets/PUG.jpg";

import {
  StyledUserCard,
  StyledUserTop,
  StyledUserOptions,
  StyledSaveChanges,
} from "./style";

import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UserEdit({ userName }) {
  return (
    <StyledUserCard>
      <StyledUserTop>

        <Avatar alt="Remy Sharp" src={Pug} />
        <TextField id="standard-basic" label="Alterar Nome" variant="standard" />
      </StyledUserTop>
      <StyledUserOptions>
        <Button 
        sx={{ width: 250 }} 
        variant="contained"
        onClick={()=>console.log("Quero virar Jornalista")}>
          Quero virar Jornalista
        </Button>
        <Button
          sx={{ width: 250 }}
          variant="contained"
          onClick={() => console.log("Quero virar Empresario")}
        >
          Quero virar Empresario
        </Button>
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
export default UserEdit;
