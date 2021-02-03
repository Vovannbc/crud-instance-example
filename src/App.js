import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { UserContextProvider, InstanceContextProvider } from './providers';
import AppContainer from './application';
import { themeColors } from './theme';
import { ThemeProvider } from 'styled-components';

const theme = createMuiTheme(themeColors);

const App = () => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst={true}>
      <UserContextProvider>
        <InstanceContextProvider>
          <CssBaseline />
          <AppContainer />
        </InstanceContextProvider>
      </UserContextProvider>
    </StylesProvider>
  </ThemeProvider>
);

export default App;
