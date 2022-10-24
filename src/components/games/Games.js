import React from "react";
import './styles.css';




function Games() {
  return (
    <div className="container">
      <h1>listado de juegos con vinculos</h1>
      <p>estos son alguns juegos qcon los cuales he ido aprendiendo js, css, html...</p>
      <div className="games">
        <ul>
          <li>Gato
            <p>clasico juego de 3 figuras en linea</p>
          </li>
          <li>Memoria
          <p> juego de encontar parejas de cartas</p>
          </li>
        </ul>
      </div>
    </div>
  );
}




export default Games;