import React, { useEffect } from "react";
import "./App.css";
import Page404 from "./Pages/Page404/Page404.jsx";
import Home from "./Pages/Home/Home.jsx";
import Play from "./Pages/Play/Play.jsx";
import Instruction from "./Pages/Instruction/Instruction.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    // Check or modify the viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');

    if (viewportMeta) {
      // Read the content attribute
      const contentValue = viewportMeta.getAttribute("content");
      // console.log("Viewport Content:", contentValue);

      // Modify the content attribute
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0"
      );
    }
  }, []); // The empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/play" element={<Play />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
