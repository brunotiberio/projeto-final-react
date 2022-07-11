import Pug from "./../../assets/PUG.jpg";

import { StyledUserCard, StyledUserTop, StyledUserOptions, StyledSaveChanges, StyledTitleAdress, } from "./style";

import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm, useInput } from "lx-react-form";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function CreatorCompanyEdit({ type }) {
  const name = useInput({name: "name"});
  const phone = useInput({name: "phone"});
  const cep = useInput({name: "cep"});
  const state = useInput({name: "state"});
  const district = useInput({name: "district"});
  const city = useInput({name: "city"});
  const street = useInput({name: "street"});
  const number = useInput({name: "number"});

  const { userEdit } = useContext(UserContext);
  
  const form = useForm({
    clearFields: true,
    formFields: [name, phone, cep, state, district, city, street, number],
    submitCallback: (formData) => {
      const data={
        "name": name.value,
        "data": {
          "phone": phone.value,
          "adress": {
            "cep": cep.value,
            "street": street.value,
            "district": district.value,
            "city": city.value,
            "state": state.value
          }
        }
      }
      console.log(data);
      userEdit(7, data);
    }
  });
  return (
    <StyledUserCard>
      <form onSubmit={form.handleSubmit}>
        <StyledUserTop>
          <Avatar alt="Remy Sharp" src={Pug} />

          <TextField
            {...name.inputProps}
            label="Alterar Nome"
            placeholder={"nome " + type}
            variant="standard"
          />
          <TextField
            {...phone.inputProps}
            label="Alterar number"
            placeholder="(55) 00 00000-0000"
            variant="standard"
          />
        </StyledUserTop>
        <StyledTitleAdress>Endereço</StyledTitleAdress>
        <StyledUserOptions>
          <TextField {...cep.inputProps} label="cep" variant="standard" />
          <TextField {...state.inputProps} label="state" variant="standard" />
          <TextField
            {...district.inputProps}
            label="district"
            variant="standard"
          />
          <TextField {...city.inputProps} label="city" variant="standard" />
          <TextField {...street.inputProps} label="street" variant="standard" />
          <TextField {...number.inputProps} label="number" variant="standard" />
        </StyledUserOptions>
        <StyledSaveChanges>
          <Button sx={{ width: 250 }} variant="contained" type="submit">
            Salvar Alterações
          </Button>
        </StyledSaveChanges>
      </form>
    </StyledUserCard>
  );
}
export default CreatorCompanyEdit;
