import { Header } from "./components/header";
import { StyledMain } from "./components/main/style";
import { Main } from "./components/main";
import { StyledGlobal } from "./style";
import Login from "./components/login";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Main></Main>
      <Login />
    </>
  );
}

export default App;
