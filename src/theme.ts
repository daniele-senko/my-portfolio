import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#f25e8d',
    },
    secondary: {
      main: '#fff',
    },
  },
    typography: {
        fontFamily: '"Poppins"',
    },
});

theme = responsiveFontSizes(theme);

export default theme;