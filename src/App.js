import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import theme from './components/themes/ThemeConfig';
import UserContext from './components/useContext';
import Home from './pages/home/Index';


function App() {

  const [user, setUser] = useState("");
  const data = { user, setUser };

  return (
  <ThemeProvider theme={theme}>   
    <UserContext.Provider value={data}>
      <Home />   
    </UserContext.Provider>
  </ThemeProvider>
  );
}

export default App;
