import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './style.css';


export const userContext = React.createContext();

function Home() {
  const { register, handleSubmit } = useForm()
  const [user, setUser] = useState(null);

  const Enviar = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: 'brian',

      })
    }
  }

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
      <userContext.Provider value={user}>
        <div className="name">
        <label className="Ingresa" >Ingresa tu nombre</label>
        <br />
        <input type="text" {...register('name', {
            required: true,
            maxLength: 15,
            minLength:5,
          })} />
        <br />  
        <button className="but" onClick={Enviar} type="submit" value="Enviar">  Enviar  </button> 
        </div>
      </userContext.Provider>
    </div>
  );
}

export default Home;