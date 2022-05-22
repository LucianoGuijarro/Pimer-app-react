import React from 'react';
import './PeliculasCards.css'

const PeliculasCards = ({pelicula}) => {
    const imagen = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
  return (
    <li className="PeliculaCards">
        <img className='imagenPelicula' src={imagen} alt={pelicula.title} width={230} height={345} />
        <div className="PeliculaCards">
        {pelicula.title}
        </div>
    </li>
  )
}

export default PeliculasCards