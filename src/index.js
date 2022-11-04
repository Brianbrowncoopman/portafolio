import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import About from './components/about/Index';
import Contact from './components/contact/Index';
import ResponsiveAppBar from './components/navbar/Index';
import Proyects from './components/proyects/Index';
import Games from './components/games/Index';
import Knowledge from './components/knowledge/Index';
import Net from './components/redes/Index';
import background from './img/images.jpg';
import Footer from './components/footer/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='font' style={{ backgroundImage: `url(${background}) `}}>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Contactame" element={<Contact />} />
      <Route path="Conoceme" element={<About />} />
      <Route path="proyectos" element={<Proyects />} />
      <Route path="games" element={<Games />} />
      <Route path="Conocimientos" element={<Knowledge />} />
    </Routes>
    <br></br>
    <Net />
    <Footer />
    <br></br>
  </div>
  </BrowserRouter>
);