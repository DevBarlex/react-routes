import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/projects">Proyectos</Link> | 
        <Link to="/resume">Currículum</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
