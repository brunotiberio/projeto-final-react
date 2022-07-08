import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NewsProvider } from "./contexts/NewsContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </UserProvider>
  </React.StrictMode>
);
