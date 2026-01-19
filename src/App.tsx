import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Professional from "./screens/Professional";
import Personal from "./screens/Personal";
import Contact from "./screens/Contact";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as "dark" | "light") || "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
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
