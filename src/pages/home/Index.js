import React, { useContext, useState } from "react";
import './style.css';
import UserContext from "../../components/useContext/index";




export default function Home() {

  const context = useContext(UserContext);
  const [user, setUser] = useState("");

  return (
    <div className="home">
      <h1>Bienvenido</h1>
      <br></br>
      <div className="p">
        <p>En esta aplicacion, pagina web. Podras encontrar mis conocimientos, mis desafios , informacion sobre mi y datos de contacto .</p>
        <p>te puedes desplazar a dentro de esta a clickeando en Conoceme, Contactame, Conocimientos, Proyectos, Juegos</p>
        <p>Soy estudiante de desarrollo front y back end en LARNU, desde julio del 2022.</p>
      </div>
      <br />


      <div className="name">
        <form className="form">
          <input 
            className="input"
            type="text"
            placeholder="tu nombre aca" 
            name="user"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <button className='but' type='submit' onClick={() => setUser('')}>enviar</button>
        </form>
      </div>
    </div>
  );
}
