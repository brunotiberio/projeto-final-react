import { createContext, useState } from "react";
import { api } from "../services/api";

export const NewsContext = createContext([]);

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState();
  const [article, setArticle] = useState();

  async function getAllNews() {
    try {
      const response = await api.get("/articles");

      setAllNews(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneNewsById() {
    try {
      const response = await api.get(`/articles/1`);

      setArticle(response.data);

    } catch (error) {

      console.log(error);
      
    }
  }


  return (
    <NewsContext.Provider
      value={{ getAllNews, allNews, getOneNewsById, article }}
    >
      {children}
    </NewsContext.Provider>
  );
};
