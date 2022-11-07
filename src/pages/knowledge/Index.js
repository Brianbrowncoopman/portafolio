import React, { useContext } from "react";
import './style.css';
import html5 from '../../img/html5.jpg';
import css from '../../img/css.png';
import sass from '../../img/sass.jpg';
import js from '../../img/js.jpg';
import github from "../../img/github.png";
import vercel from "../../img/vercel.png";
import react from "../../img/react.png";
import UserContext from "../../components/context";



function Knowledge() {

  const context = useContext(UserContext);

  return (
    <div>
      <h1>Tecnologias que he aprendido en {context.school}</h1>
      <div className="container">
        <div>
          <h4>HTML</h4>
          <a href="https://html5.com/" target="_blank" rel="noreferrer">
            <img className="html" alt="img1" src={html5} width="150px" height="150px" border="3px solid" border-radius="10px"/>
          </a>
        </div>
        <div>
          <h4>CSS</h4>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">
            <img className="html" alt="img2"src={css} width="150px" height="150px" border="3px solid" />
          </a>
        </div>
        <div>
          <h4>SASS</h4>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img className="html" alt="sass" src={sass} width="150px" height="150px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>GITHUb</h4>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img className="html" alt="github"src={github} width="150px" height="150px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>Vercel</h4>
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            <img className="html" alt="vercel" src={vercel} width="150px" height="150px" border="3px solid"/>
          </a>
        </div>
        <div>
          <h4>JS</h4>
          <a href="https://lenguajejs.com/" target="_blank" rel="noreferrer">
            <img className="html" alt="js" src={js} width="150px" height="150px" border="3px solid" />
          </a>
        </div>
        <div>
          <h4>React JS</h4>
          <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
            <img className="html" alt="React" src={react} width="150px" height="150px" border="3px solid"  />
          </a>
        </div>
      </div>
    </div>
    );
}




export default Knowledge;