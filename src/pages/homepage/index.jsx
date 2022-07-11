/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { CardNewsOverview } from "../../components/cardNewOverview";
import { NewsContext } from "../../contexts/NewsContext";
import { Container } from "./script";

export function Homepage() {
  const { allNews, getAllNews } = useContext(NewsContext);

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <Container>
      {allNews &&
        allNews.map((article) => (
          <CardNewsOverview article={article} key={article.id} />
        ))}
    </Container>
  );
}
