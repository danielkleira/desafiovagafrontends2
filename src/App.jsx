import logo from "./logo.svg";
import "./App.css";
import Providers from "../src/Providers";
import GlobalStyle from "./Styles/global";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Providers>
        <GlobalStyle />
        <Body />
      </Providers>
    </div>
  );
}

export default App;
