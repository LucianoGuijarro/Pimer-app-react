import React from "react";
import './Columnas.css'
import Contactenos from "../Contactenos/Contactenos";
import MapaDeSitio from "../MapaDeSitio/MapaDeSitio";
import RedesSociales from "../RedesSociales/RedesSociales";

const Columnas = () => {
  const tituloColumna1 = "Contactenos";
  const tituloColumna2 = "Mapa de Sitio";
  const direccion = "Mendoza 451, Tucuman";
  const email = "pelimania@hotmail.com";
  const telefono = 3815648975;
  const home = "Inicio";
  const category = "Categorias";
  const acercaDeNosotros = "Acerca de Nosotros";
  const tituloColumna3 = "Redes Sociales"
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Contactenos
            tituloColumna1={tituloColumna1}
            direccion={direccion}
            email={email}
            telefono={telefono}
          />
        </div>
        <div className="col-4">
          <MapaDeSitio
            tituloColumna2={tituloColumna2}
            home={home}
            category={category}
            acercaDeNosotros={acercaDeNosotros}
          />
        </div>
        <div className="col-4">
          <RedesSociales tituloColumna3={tituloColumna3}/>
        </div>
      </div>
    </div>
  );
};

export default Columnas;
