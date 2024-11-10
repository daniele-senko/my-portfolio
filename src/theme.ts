import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#f50057',
    },
  },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
    },

});

theme = responsiveFontSizes(theme);

export default theme;