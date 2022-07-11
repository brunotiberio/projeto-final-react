import {
  Container,
  Content,
  ContentImg,
  ContentInfo,
  ContentUser,
} from "./style";
import {useNavigate } from "react-router-dom";

export function CardNewsOverview({ article }) {

  const navigate = useNavigate()

  //função para dar reticencias para a descrição caso seja muito grande
  function resumeDescription(content) {
    if (content.split("").length > 50) {
      return content.split(" ").splice(0, 15).join(" ") + "...";
    }
    return content;
  }

  function handleNavigation(){
    navigate(`/news/1`)
  }

  return (
    <Container onClick={handleNavigation}>

      <ContentImg>
        <figure>
          <img src={article.urlToImage} alt={article.title} />
        </figure>
      </ContentImg>

      <Content>
        <p>
          {article.description.split("").length > 50
            ? resumeDescription(article.description)
            : article.description}
        </p>
        <ContentInfo>
          <div>{article.source.category}</div>
          <span>{article.publishedAt}</span>
        </ContentInfo>
      </Content>

      <ContentUser>
        <figure>
          <img src="foto da pessoa" alt="A Pessoa" />
        </figure>

        <span>Nome do autor</span>
      </ContentUser>
    </Container>
  );
}
