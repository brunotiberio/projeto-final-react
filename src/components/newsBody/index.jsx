import { AuthContent, Content, StyledArticle } from "./style";


export const NewsBody = ({title, url, imageDescription, content}) => {
  //pegar nome do author (??)

  return (
    <StyledArticle>
      <Content>
        
    <h2>{title}</h2>

    <figure>
        <img src={url} alt={imageDescription} />
        <figcaption>{imageDescription}</figcaption>
    </figure>

        
    </Content>

      <section>
       {content}
      </section>
      <AuthContent>
        <span>(Nome do Autor)</span>
      </AuthContent>

      
    </StyledArticle>
  );
};
