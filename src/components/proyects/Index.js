
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import listadetareas from '../../img/listadetareas.png';
import calculadora from '../../img/calculadora.png';
import contador from '../../img/contador.png';
import clima from '../../img/clima.png';
import './style.css';



function Proyects() {
  return (
      <div >
        <h2>Proyectos con los que he aprendido</h2>
        <br />
        <div className="calculadora">
          <h3>Calculadora</h3>
          <p>Una App para toda ocacion</p>
          <div className="calculadora-conf">
            <a href="https://github.com/Brianbrowncoopman/calculadora2" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://calculadora2-ivory.vercel.app/" target="_blank" rel="noreferrer">
              <img alt="calculadora" src={calculadora} width="200px" height="200px"/>
            </a>
          </div>  
        </div>
        <br />
        <div className="contador">
          <h3>Contador de clicks</h3>
          <p>clasico juego de 3 figuras en linea</p>
          <div className="contador-conf">
            <a href="https://github.com/Brianbrowncoopman/contadordeclicks" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://contadordeclicks.vercel.app/" target="_blank" rel="noreferrer">
              <img alt="contador" src={contador} width="200px" height="200px"/>
            </a>
          </div>  
        </div>
        <br />
        <div className="lista">
          <h3>To-do list</h3>
          <p>clasico juego de 3 figuras en linea</p>
          <div className="lista-conf">
            <a href="https://github.com/Brianbrowncoopman/listatareas" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://listadetareas-seven.vercel.app/" target="_blank" rel="noreferrer">
              <img alt="listadetareas" src={listadetareas} width="200px" height="200px"/>
            </a>
          </div>  
        </div>
        <br />
        <div className="clima">
          <h3>Clima App</h3>
          <p>clasico juego de 3 figuras en linea</p>
          <div className="clima-conf">
            <a href="https://github.com/Brianbrowncoopman/climaApireact" target="_blank" rel="noreferrer">
              <GitHubIcon
              sx={{ color: 'black',borderRadius: '8px',
              boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
            </a>
            <a href="https://clima-apireact.vercel.app/" target="_blank" rel="noreferrer">
              <img alt="clima" src={clima} width="200px" height="200px"/>
            </a>
          </div>  
        </div>
      </div>
  );
}


export default Proyects;