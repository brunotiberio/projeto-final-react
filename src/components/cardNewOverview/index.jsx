import {
  Container,
  Content,
  ContentImg,
  ContentInfo,
  ContentUser,
} from "./style";

export function CardNewsOverview({ article }) {

  //função para dar reticencias para a descrição caso seja muito grande
  function resumeDescription(content) {
    if (content.split("").length > 50) {
      return content.split(" ").splice(0, 13).join(" ") + "...";
    }
    return content;
  }

  return (
    <Container>
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
          <button>{article.source.category}</button>
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
