import { useUserContext, useUserToggleContext } from "../../components/useContext";





const About = () => {

const user = useUserContext();

  return (
      <div className="about">
        <h1>Hola aca encontraras un poco de mi historia</h1>
        {user && <p> Hola {user.name}Mi nombre es Brian Brown tengo 39 años</p>}
      <p>Mi vida profesional siempre estuvo ligada a la gastronomia , desarrollandome tanto como Chef de Cocina asi como Administrador de restaurantes</p>
      <p></p>
      </div>
    
  );
}




export default About;