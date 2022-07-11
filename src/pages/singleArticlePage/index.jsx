import { useContext, useEffect } from "react";
import { NewsBody } from "../../components/newsBody";

import { NewsContext } from "../../contexts/NewsContext";

export function SingleArticlePage() {

  const { getOneNewsById, article } = useContext(NewsContext);

  useEffect(() => {
    getOneNewsById();
  }, []);

  return(
    <>
      <NewsBody article={article} />
    </>
  );
}
