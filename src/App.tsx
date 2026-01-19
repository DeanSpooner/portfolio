import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Professional from "./screens/Professional";
import Personal from "./screens/Personal";
import Contact from "./screens/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="professional" element={<Professional />} />
        <Route path="personal" element={<Personal />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
