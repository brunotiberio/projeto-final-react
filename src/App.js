import CompanyRegistration from "./components/company-registration";
import Login from "./components/login";
import PersonRegistration from "./components/person-registration";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Login />
      <CompanyRegistration />
      <PersonRegistration />
    </>
  );
}

export default App;
