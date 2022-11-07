import React, { useContext } from "react";
import UserContext from "../../components/context";

import './style.css';





export default function Home() {

  
  const context = useContext(UserContext);
  
  return (
    
    <div className="home">
      <h1>Bienvenido</h1>
      <br></br>
      <div className="p">
        <p>En esta aplicacion, pagina web. Podras encontrar mis conocimientos, mis desafios , informacion sobre mi y datos de contacto .</p>
        <p>te puedes desplazar a dentro de esta a clickeando en Conoceme, Contactame, Conocimientos, Proyectos, Juegos</p>
        <p>Soy estudiante de desarrollo front y back end en {context.school}, desde julio del 2022.</p>
      </div>
      
    </div>
  );
}
