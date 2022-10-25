import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ResponsiveAppBar from './components/navbar/Navbar';
import Proyects from './components/proyects/Proyects';
import Games from './components/games/Games';
import Knowledge from './components/knowledge/Knowledge';
import Profile from './components/profile/Profile';
import Net from './components/redes/Net';
import background from './img/images.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='font' style={{ backgroundImage: `url(${background}) `}}>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Contactame" element={<Contact />} />
      <Route path="Acerca de mi" element={<About />} />
      <Route path="proyectos" element={<Proyects />} />
      <Route path="games" element={<Games />} />
      <Route path="Conocimientos" element={<Knowledge />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
    <br></br>
    <Net />
  </div>
  </BrowserRouter>
);