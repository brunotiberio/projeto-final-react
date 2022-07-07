import { DeleteModal } from "./components/deleteModal";
import { Header } from "./components/header";
import { StyledMain } from "./components/main/style";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <DeleteModal/>
      <StyledMain>        
      </StyledMain>
    </>
  );
}

export default App;
