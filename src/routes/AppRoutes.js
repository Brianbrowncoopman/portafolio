import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ResponsiveAppBar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Games from './components/games/Games';
import Knowledge from './components/knowledge/Knowledge';
import Profile from './components/profile/Profile';


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <RedSocial/>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="contactame" element={<Contact />} />
      <Route path="acerca de mi" element={<About />} />
      <Route path="proyectos" element={<Portfolio />} />
      <Route path="games" element={<Games />} />
      <Route path="conocimientos" element={<Knowledge />} />
      <Route path="Profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter