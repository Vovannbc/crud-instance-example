import React from "react";
import { Route, Switch } from "react-router";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import routes from "./routes";

const AppContainer = styled.div`
  padding: 25px;
`;

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppContainer>
        <Switch>
          {routes().map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
