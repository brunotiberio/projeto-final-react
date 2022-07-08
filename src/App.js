import { Header } from "./components/header";
import { Main } from "./components/main";
import UserEdit from "./components/userEdit";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Main>
        <UserEdit/>
      </Main>
    </>
  );
}

export default App;
