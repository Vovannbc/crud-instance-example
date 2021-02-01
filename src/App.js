import React from "react";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { UserContextProvider, InstanceContextProvider } from "./providers";
import AppContainer from "./application";
import { themeColors } from "./theme";

const theme = createMuiTheme(themeColors);

const App = () => (
  <StylesProvider injectFirst={false}>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <InstanceContextProvider>
          <CssBaseline />
          <AppContainer />
        </InstanceContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
