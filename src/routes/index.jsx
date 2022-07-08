import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import CompanyRegisterPage from "../pages/company -register";
import PersonRegisterPage from "../pages/person-register";
import RegisterPage from "../pages/register";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"}></Route>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<RegisterPage />} />
      <Route exact path={"/register/person"} element={<PersonRegisterPage />} />
      <Route
        exact
        path={"/register/enterprise"}
        element={<CompanyRegisterPage />}
      />
      <Route exact path={"/mynews/edit"} />
      <Route exact path={"/news/:id"} />
      <Route exact path={"/profile"} />
      <Route exact path={"/mynews/create"} />
    </Routes>
  );
}

export default Paths;
