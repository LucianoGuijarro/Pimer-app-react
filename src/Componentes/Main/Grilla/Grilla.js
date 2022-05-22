import React from "react";
import "./Grilla.css";
import peliculas from "../peliculas.json";
import PeliculasCards from "../PeliculasCards/PeliculasCards";
const Grilla = () => {
  return (
    <ul className="grilla">
      {peliculas.map((pelicula) => {
        return <PeliculasCards pelicula={pelicula}/>
      })}
    </ul>
  );
};

export default Grilla;
