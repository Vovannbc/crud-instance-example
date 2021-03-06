import React from 'react';
import { hot } from 'react-hot-loader/root';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider
} from '@material-ui/core/styles';
import { UserContextProvider, InstanceContextProvider } from './providers';
import AppContainer from './application';
import { themeColors } from './theme';
import { ThemeProvider } from 'styled-components';

const theme = createMuiTheme(themeColors);

const App = () => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst={true}>
      <MaterialThemeProvider theme={theme}>
        <UserContextProvider>
          <InstanceContextProvider>
            <CssBaseline />
            <AppContainer />
          </InstanceContextProvider>
        </UserContextProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </ThemeProvider>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
