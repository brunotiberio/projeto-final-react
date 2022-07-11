import CreatorCompanyEdit from "./components/creatorCompanyEdit";
import { Header } from "./components/header";
import { Main } from "./components/main";
import Paths from "./routes";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />

      <Main>
        <Paths />
        <CreatorCompanyEdit/>
      </Main>
    </>
  );
}

export default App;
