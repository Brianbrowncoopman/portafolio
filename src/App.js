import { ThemeProvider } from '@emotion/react';
import theme from './components/themes/ThemeConfig';
import Home from './components/home/Index';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;
