import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Professional from "./screens/Professional";
import Personal from "./screens/Personal";
import Education from "./screens/Education";
import Spinner from "./components/Spinner";
import styled from "styled-components";

function App() {
  const [screen, setScreen] = useState("home");

  const ScreenContainer = styled.div`
    min-width: 100vw;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1084px) {
      position: absolute;
      top: 0;
      left: 0;
    }
  `;

  return (
    <>
      <Navbar screen={screen} setScreen={setScreen} />
      <ScreenContainer>
        {screen === "home" ? <Home /> : null}
        {screen === "about" ? <About /> : null}
        {screen === "professional" ? <Professional /> : null}
        {screen === "personal" ? <Personal /> : null}
        {screen === "education" ? <Education /> : null}
      </ScreenContainer>
      <Spinner />
    </>
  );
}

export default App;
