import React from "react";
import { CssBaseline } from "@material-ui/core";
import { UserContextProvider } from "./providers";
import AppContainer from "./application";

function App() {
  return (
    <UserContextProvider>
      <CssBaseline />
      <AppContainer />
    </UserContextProvider>
  );
}

export default App;
