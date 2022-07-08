import { Header } from "./components/header";
import { Main } from "./components/main";
import CompanyRegisterPage from "./pages/company -register";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Main>
        <CompanyRegisterPage />
      </Main>
    </>
  );
}

export default App;
