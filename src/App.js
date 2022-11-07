import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import UserContext from './components/context';

import theme from './components/themes/ThemeConfig';
import Home from './pages/home/Index';



function App() {

  const [user, setUser] = useState("");
  const [school, setSchool] = useState("");
  const [edge, setEdge] = useState("");
  const data = { user, setUser, school, setSchool, edge, setEdge };

  return (
  
  <ThemeProvider theme={theme}>   
    <Home />   
  </ThemeProvider>
  
  );
}

export default App;
