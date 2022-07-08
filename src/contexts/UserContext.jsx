import { createContext } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  async function userLogin(formData) {
    try {
      const response = await api.post("/login", formData);
      //   console.log(response);
      localStorage.setItem(
        "@KNN-TOKEN",
        JSON.stringify(response.data.accessToken)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function userCreate(formData) {
    try {
      const response = await api.post("/register", formData);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userCreate }}>
      {children}
    </UserContext.Provider>
  );
};
