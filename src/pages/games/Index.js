import React from "react";
import './style.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import gato from '../../img/gato.png';
import memorice from '../../img/memorice.png';




function Games() {
  return (
    <div>
      <h1>Aca podras encontrar algunos juegos que he aprendido a desarrollar. </h1>
      
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
              <img className="gatto" alt="gato" src={gato} width="150px" height="150px" pading="10px"/>
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
              <img className="memo" alt="memorice"src={memorice} width="150px" height="150px"/>
            </a>
          </div>
        </div>  
      </div>
    </div>
  );
}




export default Games;