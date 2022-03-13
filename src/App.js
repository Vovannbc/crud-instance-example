import React from 'react';
import { hot } from 'react-hot-loader/root';
import { createTheme, CssBaseline } from '@material-ui/core';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider
} from '@material-ui/core/styles';
import { UserContextProvider, WishListContextProvider } from './providers';
import AppContainer from './application';
import { themeColors } from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme(themeColors);

const App = () => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst={true}>
      <MaterialThemeProvider theme={theme}>
        <UserContextProvider>
          <WishListContextProvider>
            <CssBaseline />
            <BrowserRouter>
              <AppContainer />
            </BrowserRouter>
          </WishListContextProvider>
        </UserContextProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </ThemeProvider>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
