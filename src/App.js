import { DeleteModal } from "./components/deleteModal";
import { Header } from "./components/header";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <DeleteModal/>
    </>
  );
}

export default App;
