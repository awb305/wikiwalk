import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#458fb4',
      light: '#e2edf3',
      dark: '#7bb4d2'
    },

    secondary: {
      main: '#edca24',
      light: '#e2edf3',
      dark: '#458fb4',
      contrastText: '#fff'
    },
    
    background: {
      default: '#e2edf3'
    }
  },

  typography: {
    fontFamily: ['lato'].join(',')
  },

  
});

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default Theme;