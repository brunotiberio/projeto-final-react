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

import { useForm, useInput } from "lx-react-form";

function CreatorCompanyEdit({ type }) {
  const name = useInput({
    name: "name",
  });

  const phone = useInput({
    name: "telefone",

  });
  const cep = useInput({
    name: "cep",

  });
  const estate = useInput({
    name: "estate",
  });
  const district = useInput({
    name: "district",
  });
  const city = useInput({
    name: "city",
  });
  const street = useInput({
    name: "street",
  });
  const number = useInput({
    name: "number",
  });
  const form = useForm({
    clearFields: true,
    formFields: [name, phone, cep, estate, district, city, street, number],
    submitCallback: ({name, phone, cep, estate, district, city, street, number}) => {
    console.log(
        {
          "name": {name},
          "data": {
            "phone": {phone},
            "adress": {
              "cep": {cep},
              "street": {street},
              "district": {district},
              "city": {city},
              "state": {estate}
            }
          }
      }
      );
    },
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
          <TextField {...estate.inputProps} label="estate" variant="standard" />
          <TextField {...district.inputProps} label="district" variant="standard" />
          <TextField {...city.inputProps} label="city" variant="standard" />
          <TextField {...street.inputProps} label="street" variant="standard" />
          <TextField {...number.inputProps} label="number" variant="standard" />
        </StyledUserOptions>
        <StyledSaveChanges>
          <Button
            sx={{ width: 250 }}
            variant="contained"
            type="submit"
          >
            Salvar Alterações
          </Button>
        </StyledSaveChanges>

      </form>
    </StyledUserCard>
  );
}
export default CreatorCompanyEdit;
