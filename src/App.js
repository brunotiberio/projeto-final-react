import CreatorCompanyEdit from "./components/creatorCompanyEdit";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Homepage } from "./pages/homepage";
import Paths from "./routes";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
        <Header />
      <Main>
        <Homepage/>
      <Header />
      <Main>
      <Paths />

      </Main>
    </>
  );
}

export default App;
