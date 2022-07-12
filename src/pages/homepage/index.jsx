/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { CardNewsOverview } from "../../components/cardNewOverview";
import { NewsContext } from "../../contexts/NewsContext";
import { Container } from "./script";

export function Homepage() {
  const {
    allNews,
    getAllNews,
    article,
    filter,
    filteredNews,
    setFilteredNews,
  } = useContext(NewsContext);

  useEffect(() => {
    getAllNews();
  }, [article]);

  useEffect(() => {
    if (filter && allNews) {
      setFilteredNews(allNews.filter((article) => article.category === filter));
    }
  }, [filter]);
  return (
    <Container>
      {
      filteredNews ?   
          filteredNews?.map((article) => (
            <CardNewsOverview article={article} key={article.id} />
          ))
      : 
          allNews?.map((article) => (
            <CardNewsOverview article={article} key={article.id} />
          ))
      }
    </Container>
  );
}
