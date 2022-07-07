import { Header } from "./components/header";
import { StyledMain } from "./components/main/style";
import { NewsBody } from "./components/newsBody";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />
      <StyledMain>      
        <NewsBody/>
      </StyledMain>
    </>
  );
}

export default App;
