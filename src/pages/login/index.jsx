import Login from "../../components/login";
import undraw_sharing_knowledge_03vp from "../../assets/undraw_sharing_knowledge_03vp.svg";

function LoginPage() {
  return (
    <div>
      <Login />
      <img src={undraw_sharing_knowledge_03vp} alt="imagem da tela de login" />
    </div>
  );
}

export default LoginPage;
