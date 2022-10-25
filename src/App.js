import { ThemeProvider } from '@emotion/react';
import theme from './components/themes/ThemeConfig';
import Home from './components/home/Home';
import background from './img/images.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
        <Home />
      
    </ThemeProvider>
  );
}

export default App;
