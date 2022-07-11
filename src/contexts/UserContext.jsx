import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
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
      } catch (error) {}
    }
    logado();
  }, []);

  async function userLogin(formData) {
    try {
      const response = await api.post("/login", formData);
      //console.log(response.data.user);
      setUser(response.data.user);
      localStorage.setItem(
        "@KNN-TOKEN",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem("@KNN-ID", response.data.user.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function userCreate(formData) {
    try {
      await api.post("/register", formData);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function userEdit({ formData }) {
    try {
      const response = await api.patch("users/5", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userCreate, user }}>
      {children}
    </UserContext.Provider>
  );
};
