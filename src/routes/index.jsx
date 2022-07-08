import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import CompanyRegisterPage from "../pages/company -register";
import { Homepage } from "../pages/homepage";
import PersonRegisterPage from "../pages/person-register";
import RegisterPage from "../pages/register";
import { SingleArticlePage } from "../pages/singleArticlePage";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Homepage/>}></Route>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<RegisterPage />} />
      <Route exact path={"/register/person"} element={<PersonRegisterPage />} />
      <Route
        exact
        path={"/register/enterprise"}
        element={<CompanyRegisterPage />}
      />
      <Route exact path={"/mynews/edit"} />
      <Route exact path={"/news/:1"}  element={<SingleArticlePage/>}/>
      <Route exact path={"/profile"} />
      <Route exact path={"/mynews/create"} />
    </Routes>
  );
}

export default Paths;
