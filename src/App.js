import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import routes from "./routes";
import Link from "@material-ui/core/Link";

const AppContainer = styled.div`
  padding: 25px;
`;

function App() {
  const history = createBrowserHistory();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppContainer>
        <nav>
          <Link href="/manage" style={{ marginRight: 10 }}>Manage Route</Link>
          <Link href="/display">Display Route</Link>
        </nav>
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
