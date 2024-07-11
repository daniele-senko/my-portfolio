import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffdab9",
    },
    secondary: {
      main: "#dcdcdc",
    },
  },
  typography: {
    fontFamily: [
      //'-apple-system',
      //'BlinkMacSystemFont',
      '"Segoe UI"',
      //'Roboto',
      //'Helvetica Neue',
      //'Arial',
      //'sans-serif',
      //'"Apple Color Emoji"',
      //'"Segoe UI Emoji"',
      //'"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
