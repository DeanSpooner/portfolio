import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Professional from "./screens/Professional";
import Personal from "./screens/Personal";
import Education from "./screens/Education";
import Spinner from "./components/Spinner";

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <>
      <Navbar screen={screen} setScreen={setScreen} />
      {screen === "home" ? <Home /> : null}
      {screen === "about" ? <About /> : null}
      {screen === "professional" ? <Professional /> : null}
      {screen === "personal" ? <Personal /> : null}
      {screen === "education" ? <Education /> : null}
      <Spinner />
    </>
  );
}

export default App;
