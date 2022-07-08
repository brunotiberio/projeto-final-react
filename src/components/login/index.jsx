import { useForm, useInput } from "lx-react-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

function Login() {
  const { userLogin } = useContext(UserContext);

  const email = useInput({ name: "email", validation: "email" });

  const password = useInput({
    name: "password",
    minLength: 8,
    validation: "senha",
  });

  const form = useForm({
    clearFields: true,
    formFields: [email, password],
    submitCallback: (formData) => {
      console.log(formData);
      userLogin(formData);
    },
  });

  return (
    <div>
      <h2>Área de Login</h2>
      <form className="form" onSubmit={form.handleSubmit}>
        <TextField
          type="email"
          error={email.error && true}
          label="Email"
          helperText={email.error}
          {...email.inputProps}
        />
        <TextField
          type="password"
          error={password.error && true}
          label="Senha"
          helperText={password.error}
          {...password.inputProps}
        />

        <Button variant="contained" size="small" type="submit">
          Logar
        </Button>
      </form>
    </div>
  );
}

export default Login;
