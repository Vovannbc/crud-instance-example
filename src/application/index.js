import React from 'react';
import { Navigation } from '../components';
import { AppRoutes } from '../routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Box from '@material-ui/core/Box';

const AppContainer = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navigation />
      <AppRoutes />
    </Router>
  );
};

export default AppContainer;
