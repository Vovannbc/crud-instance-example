import React from "react";
import {Router, Route, Switch} from "react-router";
import { createBrowserHistory } from 'history';
import {CssBaseline} from "@material-ui/core";
import styled from "styled-components";
import routes from "./routes";

const AppContainer = styled.div`
  padding: 25px;
`;

function App() {
  const history = createBrowserHistory();
  console.log(history);
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppContainer>
        <Router history={history}>
          <Switch>
            {routes().map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </Router>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
