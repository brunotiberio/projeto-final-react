import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@KNN-TOKEN");
    const id = localStorage.getItem("@KNN-ID");

    async function logado() {
      try {
        const parsedToken = JSON.parse(token);
        const idParsed = JSON.parse(id);
        const response = await api.get(`/users/${idParsed}`, {
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        localStorage.removeItem("@KNN-ID");
        localStorage.removeItem("@KNN-TOKEN");
      }
    }
    logado();
  }, []);

  async function userLogin(formData, setError) {
    try {
      const response = await api.post("/login", formData);
      //console.log(response.data.user);
      setUser(response.data.user);
      localStorage.setItem(
        "@KNN-TOKEN",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem("@KNN-ID", response.data.user.id);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError(false);
      }, 5000);
      //console.log(error.response.data);
    }
  }

  async function userCreate(formData, setError) {
    try {
      await api.post("/register", formData);
      // console.log(response);
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  async function userEdit(userId, formData) {
    try {
      const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));
      const response = await api.patch(`users/${userId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
<<<<<<< HEAD
    <UserContext.Provider value={{ userLogin, userCreate, userEdit}}>
=======
    <UserContext.Provider value={{ userLogin, userCreate, userEdit, user }}>
>>>>>>> f661a37f5ff0868b5751ded8b62f470a092f9851
      {children}
    </UserContext.Provider>
  );
};
