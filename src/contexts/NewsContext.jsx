import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const NewsContext = createContext([]);

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();

  const {user} = useContext(UserContext)

  async function getAllNews() {
    try {
      const response = await api.get("/articles");

      setAllNews(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneNewsById(id) {
    try {
      const response = await api.get(`/articles/${id}`);

      setArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments(id) {
    try {
      const response = await api.get(`/articles/${id}?_embed=comments`);

      setComments(response.data.comments);

    } catch (error) {
      console.log(error);
    }
  }

  async function createComment(body, userId, articleId) {
    const resp = {
      ownerId: userId,
      articleId: articleId,
      content: body,
      userImg: user.userImg || "https://thumbs.dreamstime.com/z/imagem-nima-do-perfil-do-homem-34487140.jpg",
      username: user.name
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.post(`/comments`, resp, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getComments(article?.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function createArticle(formData) {
    const authorId = JSON.parse(localStorage.getItem("@KNN-ID"));

    const body = {
      ...formData,
      authorId: authorId,
    };

    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.post(`/articles`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editArticle(formData) {
    const authorId = JSON.parse(localStorage.getItem("@KNN-ID"));

    const body = {
      ...formData,
      authorId: authorId,
    };
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.patch(`/articles`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function voteArticle(articleId, articleLikes) {
    const likes = articleLikes+=1;
    try { 
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.patch(`/articles/${articleId}`, {likes:likes}, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function reportArticle(articleId, articleReports) {
    const reports = articleReports+=1;
    try { 
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));

      const response = await api.patch(`/articles/${articleId}`, {reports:reports}, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewsContext.Provider
      value={{
        getAllNews,
        allNews,
        getOneNewsById,
        article,
        getComments,
        comments,
        createComment,
        createArticle,
        editArticle,
        voteArticle,
        reportArticle
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
