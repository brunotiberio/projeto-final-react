import { useContext, useEffect } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function SingleArticlePage({ id }) {
  const { getOneNewsById } = useContext(NewsContext);

  useEffect(() => {
    getOneNewsById(1);
  }, []);

  return <h1>Ola</h1>;
}
