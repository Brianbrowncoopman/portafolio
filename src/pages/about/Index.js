import React, { useContext } from "react";
import UserContext from "../../components/useContext/index";





export default function About() {

  const context = useContext(UserContext);

  return (
      <div className="about">
        <h1>Hola {context.user} aca encontraras un poco de mi historia</h1>
        <p> Hola Mi nombre es Brian Brown tengo 39 años</p>
      <p>Mi vida profesional siempre estuvo ligada a la gastronomia , desarrollandome tanto como Chef de Cocina asi como Administrador de restaurantes</p>
      <p></p>
      </div>
    
  );
}




