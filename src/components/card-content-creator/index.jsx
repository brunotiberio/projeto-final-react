import Button from "@mui/material/Button";
import { NewsContext } from "../../contexts/NewsContext";
import { useContext, useEffect } from "react";

import "./styles.css";

function ContentCreator({ name, avatar, city, state, id }) {
  const { allNews, getAllNews, article } = useContext(NewsContext);

  useEffect(() => {
    getAllNews();
  }, [article]);

  const filtrados = allNews?.filter((news) => news?.authorId === id);

  return (
    <div className="teste--deletarr">
      <img src={avatar} alt="" />
      <p>{name}</p>
      {city ? (
        <p>
          {city}/{state}
        </p>
      ) : (
        <p>Não Informado</p>
      )}
      <p>{filtrados?.length}</p>
      <Button variant="contained" size="small" type="submit">
        Postagens
      </Button>
    </div>
  );
}

export default ContentCreator;
