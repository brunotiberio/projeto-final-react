import CreatorCompanyEdit from "./components/creatorCompanyEdit";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Main>
        <CreatorCompanyEdit>
          
        </CreatorCompanyEdit>
      </Main>
    </>
  );
}

export default App;
