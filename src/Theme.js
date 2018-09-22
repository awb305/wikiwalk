import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default Theme;