import { useForm, useInput } from "lx-react-form";

function PersonRegistration() {
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
    },
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <h3>Leitor/Jornalista</h3>
      <form onSubmit={form.handleSubmit}>
        <label>Nome</label>
        <input type="text" {...name.inputProps} />
        {name.error && <p>{name.error}</p>}

        <label>Email</label>
        <input type="email" {...email.inputProps} />
        {email.error && <p>{email.error}</p>}

        <label>Senha</label>
        <input type="password" {...password.inputProps} />
        {password.error && <p>{password.error}</p>}

        <label>Confirmar Senha</label>
        <input type="password" {...confirmPassword.inputProps} />
        {confirmPassword.error && <p>{confirmPassword.error}</p>}

        <label>Qual seu interesse no site?</label>
        <select {...type.inputProps}>
          <option value="none">Selecione a opção</option>
          <option value="leitor">Sou um Leitor</option>
          <option value="jornalista">Sou um Jornalista/Colunista</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default PersonRegistration;
