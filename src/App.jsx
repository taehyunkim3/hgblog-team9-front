import "./reset.css";
import "./App.css";
import Router from "./routes/Router";
import { styled } from "styled-components";

const StApp = styled.div`
  // min-height: 100vh;
  // height: calc(100% + 130px);
`;
function App() {
  return (
    <StApp>
      <Router />
    </StApp>
  );
}

export default App;
