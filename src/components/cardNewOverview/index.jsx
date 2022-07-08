import {
  Container,
  Content,
  ContentImg,
  ContentInfo,
  ContentUser,
} from "./style";
import Pug from "../../assets/PUG.jpg";
import Pessoa from "../../assets/exemplo.jpg";

export const CardNewsOverview = ({content}) => {
    //função para dar reticencias para a descrição caso seja muito grande
    const countLetters = (content) =>{
        if(content.split("").length > 50 ){
            return content.split(" ").splice(0,15).join(" ") + "..."
        }
        return content
    }

  return (
    <Container>
      <ContentImg>
        <figure>
          <img src={Pug} alt="O pug" />
        </figure>
      </ContentImg>
      L

      <Content>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            dipisicing 
        </p>
        <ContentInfo>
          <button>categoria</button>
          <span>XX/XX/XXXX</span>
        </ContentInfo>
      </Content>

      <ContentUser>
        <figure>
          <img src={Pessoa} alt="A Pessoa" />
        </figure>

        <span>Nome do autor</span>
      </ContentUser>
    </Container>
  );
};
