import React from "react";
import { Navigation } from "../components";
import routes, { AppRoutes } from "../routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const AppContainer = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navigation routes={routes} />
      <AppRoutes />
    </Router>
  );
};

export default AppContainer;
