import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import ResponsiveAppBar from './routes/navbar/Navbar';
import Portfolio from './routes/portfolio/Portfolio';
import Games from './routes/games/Games';
import Knowledge from './routes/knowledge/Knowledge';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contactame" element={<Contact />} />
      <Route path="acerca de mi" element={<About />} />
      <Route path="proyectos" element={<Portfolio />} />
      <Route path="games" element={<Games />} />
      <Route path="conocimientos" element={<Knowledge />} />
    </Routes>
  </BrowserRouter>
);