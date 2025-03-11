import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
