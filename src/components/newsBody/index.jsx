import { AuthContent, Content, StyledArticle } from "./style";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { PostComments } from "../postComments";
import { CardComments } from "../cardComments";
import { NewsContext } from "../../contexts/NewsContext";

export function NewsBody({ article }) {
  const [value, setValue] = React.useState(2);
  const { getComments, comments } = React.useContext(NewsContext);

  React.useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {article && (
        <StyledArticle>
          <Content>
            <h2>{article.title}</h2>

            <figure>
              <img
                style={{ width: "200px", heigth: "200px" }}
                src={article.urlToImage}
                alt={article.title}
              />
              <figcaption>{article.description}</figcaption>
            </figure>
          </Content>

          <section>{article.content}</section>

          <AuthContent>
            <span>Redigido por {article.source.author}</span>
          </AuthContent>

          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Nota</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>

          <PostComments />

          {comments && comments.map((comment) => <CardComments comment={comment} />)}
          
        </StyledArticle>
      )}
    </>
  );
}
