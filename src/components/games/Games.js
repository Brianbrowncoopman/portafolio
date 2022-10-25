import React from "react";
import './games.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import vercel from '../../img/vercel.png';
import gato from '../../img/gato.png';
import memorice from '../../img/memorice.png';




function Games() {
  return (
    <div>
      <h1>listado de juegos </h1>
      
      <br></br>
      <div className="games">
        <div className="gato">
          <h3>Gato</h3>
          <p>clasico juego de 3 figuras en linea</p>
          <div className="gato-conf">
            <a href="https://github.com/Brianbrowncoopman/gato" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://gato-f2os.vercel.app/" target="_blank" rel="noreferrer">
              <img alt="gato" src={gato} width="200px" height="200px"/>
            </a>
          </div>
        </div>
        <br />
        <div className="memorice">
          <h3>memorice</h3>
          <p> juego de 3 buscar parejas de cartas</p>
          <div className="memorice-conf">
            <a href="https://github.com/Brianbrowncoopman/memorice" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://gato-f2os.vercel.app/" target="_blank" rel="noreferrer">
              <img src={memorice} width="200px" height="200px"/>
            </a>
          </div>
        </div>  
      </div>
    </div>
  );
}




export default Games;