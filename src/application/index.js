import React, {useContext, useEffect} from "react";
import { Navigation } from "../components";
import routes, { AppRoutes } from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import {UserContext} from "../providers";

const AppWrapper = styled.div`
  padding: 25px;
`;

const AppContainer = () => {
  const history = createBrowserHistory();
  const { user: { isAuthorised } } = useContext(UserContext);

  return (
    <AppWrapper>
      {isAuthorised && <Navigation routes={routes} />}
      <Router history={history}>
        <AppRoutes />
      </Router>
    </AppWrapper>
  );
};

export default AppContainer;
