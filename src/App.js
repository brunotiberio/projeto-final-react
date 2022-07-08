import { Header } from "./components/header";
import { Main } from "./components/main";
import { SingleArticlePage } from "./pages/singleArticlePage";
import Paths from "./routes";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />

      <Header />
      <Main>
        <SingleArticlePage/>
        <Paths />
      </Main>
    </>
  );
}

export default App;
