import { blueGrey, green } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: blueGrey[900],
    }
  },
});

export default theme;