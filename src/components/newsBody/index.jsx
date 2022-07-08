import { AuthContent, Content, StyledArticle } from "./style";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export function NewsBody({ title, url, imageDescription, content, rating }){
  const [value, setValue] = React.useState(2);
  return (
    <StyledArticle>
      <Content>
        <h2>{title}</h2>

        <figure>
          <img
            style={{ width: "100px", heigth: "100px" }}
            src={url}
            alt={imageDescription}
          />
          <figcaption>{imageDescription}</figcaption>
        </figure>
      </Content>

      <section>
        {content}
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
      </section>

      <AuthContent>
        <span>(Nome do Autor)</span>
      </AuthContent>

    </StyledArticle>
  );
};
