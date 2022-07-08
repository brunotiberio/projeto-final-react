import CreateNews from "./components/createNews";
import { Header } from "./components/header";
import { Main } from "./components/main";

import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Main>
        <CreateNews />
      </Main>
    </>
  );
}

export default App;
