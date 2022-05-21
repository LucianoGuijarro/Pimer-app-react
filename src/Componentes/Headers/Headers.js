import React from 'react';
import Navbar from './Navbar/Navbar';
import Titulo from './Titulo/Titulo';

function Headers () {
    const title = "Peliculas"
    const home = "Inicio"
    const category = "Categorias"
    const nombrePagina = "PeliMania"
    return (
        <div>
            <Navbar home = {home} category = {category} nombrePagina = {nombrePagina}/>
            <Titulo title={title} />
        </div>
    )
};

export default Headers;