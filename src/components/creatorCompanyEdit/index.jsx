import {
  StyledUserCard,
  StyledUserTop,
  StyledUserOptions,
  StyledSaveChanges,
  StyledTitleAdress,
  StyledFormControl,
} from "./style";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm, useInput, useSelect } from "lx-react-form";

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { InputLabel, MenuItem, Select } from "@mui/material";

function CreatorCompanyEdit({ type }) {
  const avatar = useInput({ name: "avatar" });
  const name = useInput({ name: "name" });
  const phone = useInput({ name: "phone" });
  const cep = useInput({ name: "cep" });
  const state = useSelect({ name: "state" });
  const district = useInput({ name: "district" });
  const city = useInput({ name: "city" });
  const street = useInput({ name: "street" });
  const number = useInput({ name: "number" });

  const { userEdit, user } = useContext(UserContext);

  const [success, setSuccess] = useState(false);

  const form = useForm({
    clearFields: true,
    formFields: [
      avatar,
      name,
      phone,
      cep,
      state,
      district,
      city,
      street,
      number,
    ],
    submitCallback: (formData) => {
      const data = {
        avatar: avatar.value,
        name: name.value,
        data: {
          phone: phone.value,
          adress: {
            cep: cep.value,
            street: street.value,
            district: district.value,
            city: city.value,
            state: state.value,
          },
        },
      };
      console.log(data);
      userEdit(user?.id, data, setSuccess);
    },
  });
  return (
    <StyledUserCard>
      <form onSubmit={form.handleSubmit}>
        <StyledUserTop>
          <TextField
            {...avatar.inputProps}
            label="Imagem do perfil (url)"
            placeholder="URL da imagem"
            variant="standard"
          />

          <TextField
            {...name.inputProps}
            label="Alterar Nome"
            placeholder={"nome " + type}
            variant="standard"
          />
          <TextField
            {...phone.inputProps}
            label="Alterar telefone"
            placeholder="(55) 0 00000-0000"
            variant="standard"
          />
        </StyledUserTop>
        <StyledTitleAdress>Endereço</StyledTitleAdress>
        <StyledUserOptions>
          <TextField {...cep.inputProps} label="CEP" variant="standard" />

          <StyledFormControl style={{ width: "100%", marginTop: 20 }}>
            <InputLabel>Estado</InputLabel>
            <Select {...state.inputProps} label="Categoria" variant="standard">
              <MenuItem value="AC">Acre</MenuItem>
              <MenuItem value="AL">Alagoas</MenuItem>
              <MenuItem value="AP">Amapá</MenuItem>
              <MenuItem value="AM">Amazonas</MenuItem>
              <MenuItem value="BA">Bahia</MenuItem>
              <MenuItem value="CE">Ceará</MenuItem>
              <MenuItem value="DF">Distrito Federal </MenuItem>
              <MenuItem value="ES">Espírito Santo</MenuItem>
              <MenuItem value="GO">Goiás</MenuItem>
              <MenuItem value="MA">Maranhão</MenuItem>
              <MenuItem value="MT">Mato Grosso</MenuItem>
              <MenuItem value="MS">Mato Grosso do sul</MenuItem>
              <MenuItem value="MG">Minas Gerais</MenuItem>
              <MenuItem value="PA">Pará</MenuItem>
              <MenuItem value="PB">Paraíba</MenuItem>
              <MenuItem value="PR">Paraná</MenuItem>
              <MenuItem value="PE">Pernambuco</MenuItem>
              <MenuItem value="PI">Piauí</MenuItem>
              <MenuItem value="RJ">Rio de Janeiro</MenuItem>
              <MenuItem value="RN">Rio Grande do Norte</MenuItem>
              <MenuItem value="RS">Rio Grande do Sul</MenuItem>
              <MenuItem value="RO">Rondônia</MenuItem>
              <MenuItem value="RR">Roraima</MenuItem>
              <MenuItem value="SC">Santa Catarina</MenuItem>
              <MenuItem value="SP">São Paulo</MenuItem>
              <MenuItem value="SE">Sergipe</MenuItem>
              <MenuItem value="TO">Tocantins</MenuItem>
            </Select>
          </StyledFormControl>

          <TextField
            {...district.inputProps}
            label="Bairro"
            variant="standard"
          />
          <TextField {...city.inputProps} label="Cidade" variant="standard" />
          <TextField {...street.inputProps} label="Rua" variant="standard" />
          <TextField {...number.inputProps} label="Número" variant="standard" />
        </StyledUserOptions>
        {success && (
          <p>As alterações foram salvas, em breve você será direcionado</p>
        )}
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
