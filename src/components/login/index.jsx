import { useForm, useInput } from "lx-react-form";

function Login() {
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
    },
  });
  return (
    <div>
      <h2>Área de Login</h2>
      <form onSubmit={form.handleSubmit}>
        <label>Email</label>
        <input type="email" {...email.inputProps} />
        {email.error && <p>{email.error}</p>}
        <label>Senha</label>
        <input type="password" {...password.inputProps} />
        {password.error && <p>{password.error}</p>}

        <button type="submit">Logar</button>
      </form>
    </div>
  );
}

export default Login;
