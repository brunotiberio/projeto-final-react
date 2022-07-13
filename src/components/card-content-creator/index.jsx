import { NewsContext } from "../../contexts/NewsContext";
import { useContext, useEffect } from "react";

import "./styles.css";

function ContentCreator({ name, avatar, city, state, email, phone, id }) {
  const { allNews, getAllNews, article } = useContext(NewsContext);

  useEffect(() => {
    getAllNews();
  }, [article]);

  const filtrados = allNews?.filter((news) => news?.authorId === id);

  return (
    <div>
      <img className="teste--deletarr" src={avatar} alt="" />
      <p>{name}</p>
      {city ? (
        <p>
          {city}/{state}
        </p>
      ) : (
        <p>Não Informado</p>
      )}
      <p>{email}</p>
      <p>{phone}</p>
      <p>Postagens: {filtrados?.length}</p>
    </div>
  );
}

export default ContentCreator;
