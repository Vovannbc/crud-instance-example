import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import { Navigation } from './components';
import routes from "./routes";

const AppContainer = styled.div`
  padding: 25px;
`;

function App() {
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppContainer>
        <Navigation routes={routes} />
        <Router history={history}>
          <Switch>
            {Object.values(routes).map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </Router>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
