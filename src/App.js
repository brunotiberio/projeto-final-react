import { Header } from "./components/header";
import { Main } from "./components/main";
import { Homepage } from "./pages/homepage";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
        <Header />
      <Main>
        <Homepage/>
      </Main>
    </>
  );
}

export default App;
