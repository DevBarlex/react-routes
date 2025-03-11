import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <h1>Bienvenido a mi portafolio</h1>
      <p>Soy un desarrollador web apasionado por la tecnología.</p>
      <nav>
        <Link to="/projects">Ver Proyectos</Link> | <Link to="/resume">Ver Currículum</Link>
      </nav>
    </>
  );
};

export default Home;
