import React from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import routes from "./routes";

const AppContainer = styled.div`
  padding: 25px;
`;

function App() {
  return (
    <AppContainer>
      <Switch>
        {routes().map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </AppContainer>
  );
}

export default App;
