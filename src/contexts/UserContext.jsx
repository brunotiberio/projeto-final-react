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
    } finally {
    }
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
