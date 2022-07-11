import { useForm, useInput } from "lx-react-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

function CompanyRegistration() {
  const { userCreate } = useContext(UserContext);

  const [error, setError] = useState(false);

  if (error === "Email already exists") {
    setError("Email já cadastrado");
  }

  const name = useInput({
    name: "name",
  });

  const cnpj = useInput({
    name: "cnpj",
    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{2})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1/$2",
        },
        {
          regex: /(\d{4})(\d{1,2})$/,
          replace: "$1-$2",
        },
      ],
    },
    minLength: 18,
    maxLength: 18,
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
  const form = useForm({
    clearFields: true,
    formFields: [name, cnpj, email, password, confirmPassword],
    submitCallback: (formData) => {
      //console.log(formData);
      userCreate(formData, setError);
    },
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <h3>Empresa Parceira</h3>
      <form className="form" onSubmit={form.handleSubmit}>
        <TextField
          type="text"
          label="Nome da Empresa"
          error={name.error && true}
          helperText={name.error}
          {...name.inputProps}
        />

        <TextField
          type="text"
          label="CNPJ"
          error={cnpj.error && true}
          helperText={cnpj.error}
          {...cnpj.inputProps}
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
        {error && <p>{error}</p>}
        <Button variant="contained" size="small" type="submit">
          Cadastrar
        </Button>
      </form>
      <p>
        Já possui uma conta? <a href="/login">Clique aqui </a> e faça login.
      </p>
    </div>
  );
}

export default CompanyRegistration;
