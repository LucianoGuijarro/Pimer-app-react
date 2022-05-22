import React from "react";
import './MapaDeSitio.css'

const MapaDeSitio = (props) => {
  return (
    <div>
      <p className="fs-3 text-light">{props.tituloColumna2}</p>
      <li>
        <a href="/">{props.home}</a>
      </li>
      <li>
        <a href="/">{props.category}</a>
      </li>
      <li>
          <a href="/">{props.acercaDeNosotros}</a>
      </li>
    </div>
  );
};

export default MapaDeSitio;
