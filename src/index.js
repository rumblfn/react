import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createTheme} from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb"
    },
    secondary: {
      main: '#da61bf'
    }
  }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);
