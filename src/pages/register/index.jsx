import undraw_appreciation_re_pyhy from "../../assets/undraw_appreciation_re_pyhy.svg";
import Button from "@mui/material/Button";
import "./styles.css";

function RegisterPage() {
  return (
    <div className="temp--cont--reg">
      <div className="temp--cont--int">
        <img
          className="img--invertida"
          src={undraw_appreciation_re_pyhy}
          alt="imagem tela de registro"
        />
        <div>
          <h2>REGISTRE-SE</h2>
          <h3> Junte-se a nós e obtenha mais funcionalidades na plataforma</h3>
        </div>
        <img
          className="img--n--invertida"
          src={undraw_appreciation_re_pyhy}
          alt="imagem tela de registro"
        />
      </div>
      <div className="temp--cont--opt">
        <div>
          <div>
            <h4>Gerador de conteúdo</h4>
            <ul>
              <li>Seja encontrado pelos maiores contratantes</li>
              <li>Envie sua notícia ou coluna</li>
              <li>Modere comentários de suas notícias</li>
            </ul>
          </div>
          <div>
            <h4>Leitor</h4>
            <ul>
              <li>Crie um perfil e comente todas as notícias</li>
              <li>Avalie e denuncie FakeNews</li>
              <li>Tenha mais vantagens em relação a quem não é logado</li>
            </ul>
          </div>
          <Button variant="contained" size="small">
            SOU GERADOR DE CONTEÚDO OU LEITOR
          </Button>
        </div>
        <div>
          <h4>Empresa parceira</h4>
          <ul>
            <li>Encontre jornalistas e colunistas</li>
            <li>Veja todas as postagens de um jornalista ou colunista</li>
            <li>Crie seu perfil completo e obtenha vantagens</li>
          </ul>
          <Button variant="contained" size="small">
            SEJA UMA EMPRESA PARCEIRA
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
