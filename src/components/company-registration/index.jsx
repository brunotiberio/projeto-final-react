import { useForm, useInput } from "lx-react-form";

function CompanyRegistration() {
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
      console.log(formData);
    },
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <h3>Empresa Parceira</h3>
      <form onSubmit={form.handleSubmit}>
        <label>Nome da Empresa</label>
        <input type="text" {...name.inputProps} />
        {name.error && <p>{name.error}</p>}

        <label>CNPJ</label>
        <input type="text" {...cnpj.inputProps} />
        {cnpj.error && <p>{cnpj.error}</p>}

        <label>Email</label>
        <input type="email" {...email.inputProps} />
        {email.error && <p>{email.error}</p>}

        <label>Senha</label>
        <input type="password" {...password.inputProps} />
        {password.error && <p>{password.error}</p>}

        <label>Confirmar Senha</label>
        <input type="password" {...confirmPassword.inputProps} />
        {confirmPassword.error && <p>{confirmPassword.error}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CompanyRegistration;
