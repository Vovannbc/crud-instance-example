import React from "react";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { UserContextProvider } from "./providers";
import AppContainer from "./application";
import { themeColors } from "./theme";

const theme = createMuiTheme(themeColors);

const App = () => (
  <StylesProvider injectFirst={false}>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CssBaseline />
        <AppContainer />
      </UserContextProvider>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
