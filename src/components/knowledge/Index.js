import React from "react";
import './style.css';
import html5 from '../../img/html5.jpg';
import css from '../../img/css.png';
import sass from '../../img/sass.jpg';
import js from '../../img/js.jpg';
import github from "../../img/github.png";
import vercel from "../../img/vercel.png";
import react from "../../img/react.png";



function Knowledge() {
  return (
    <div>
      <h1>Tecnologias que he aprendido</h1>
      <div className="container">
        <div>
          <h4>HTML</h4>
          <a href="https://html5.com/" target="_blank" rel="noreferrer">
            <img alt="img1" src={html5} width="200px" height="200px" border="3px solid"/>
          </a>
          
        </div>
        <div>
          <h4>CSS</h4>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">
            <img alt="img2"src={css} width="200px" height="200px" border="3px solid" />
          </a>
        </div>
        <div>
        <h4>SASS</h4>
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img src={sass} width="200px" height="200px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>GItHUb</h4>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={github} width="200px" height="200px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>Vercel</h4>
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            <img src={vercel} width="200px" height="200px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>JS</h4>
          <a href="https://lenguajejs.com/" target="_blank" rel="noreferrer">
            <img src={js} width="200px" height="200px" border="3px solid" />
          </a>
        </div>
        <div>
          <h4>React JS</h4>
          <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
            <img src={react} width="200px" height="200px" border="3px solid"  />
          </a>
        </div>
      </div>
    </div>
    );
}




export default Knowledge;