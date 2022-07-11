import { Route, Routes } from "react-router-dom";
import CreateNews from "../components/createNews";
import EditNews from "../components/editNews";
import Login from "../components/login";
import CompanyRegisterPage from "../pages/company -register";
import { Homepage } from "../pages/homepage";
import JournalistProfilePage from "../pages/perfil-jornalista";
import PersonRegisterPage from "../pages/person-register";
import RegisterPage from "../pages/register";
import { SingleArticlePage } from "../pages/singleArticlePage";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Homepage />}></Route>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<RegisterPage />} />
      <Route exact path={"/register/person"} element={<PersonRegisterPage />} />
      <Route
        exact
        path={"/register/enterprise"}
        element={<CompanyRegisterPage />}
      />
      <Route exact path={"/mynews/edit"} element={<EditNews />} />
      <Route exact path={"/news/:1"} element={<SingleArticlePage />} />
      <Route exact path={"/profile"} element={<JournalistProfilePage />} />
      <Route exact path={"/mynews/create"} element={<CreateNews />} />
    </Routes>
  );
}

export default Paths;
