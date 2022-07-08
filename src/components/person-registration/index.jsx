import { useForm, useInput } from "lx-react-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

function PersonRegistration() {
  const { userCreate } = useContext(UserContext);

  const name = useInput({
    name: "name",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const password = useInput({
    name: "password",
    validation: "senha",
  });

  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
    validation: "senha",
  });

  const type = useInput({
    name: "type",
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, confirmPassword, type],
    submitCallback: (formData) => {
      console.log(formData);
      userCreate(formData);
    },
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <h3>Leitor/Jornalista</h3>
      <form className="form" onSubmit={form.handleSubmit}>
        <TextField
          type="text"
          label="Nome"
          error={name.error && true}
          helperText={name.error}
          {...name.inputProps}
        />

        <TextField
          type="email"
          label="Email"
          error={email.error && true}
          helperText={email.error}
          {...email.inputProps}
        />

        <TextField
          type="password"
          label="Senha"
          error={password.error && true}
          helperText={password.error}
          {...password.inputProps}
        />

        <TextField
          type="password"
          label="Confirmar Senha"
          error={confirmPassword.error && true}
          helperText={confirmPassword.error}
          {...confirmPassword.inputProps}
        />

        <FormControl fullWidth>
          <InputLabel>Qual seu interesse no site?</InputLabel>
          <Select label="Qual seu interesse no site?" {...type.inputProps}>
            <MenuItem value="leitor">Sou um Leitor</MenuItem>
            <MenuItem value="jornalista">Sou um Jornalista/Colunista</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" size="small" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default PersonRegistration;
