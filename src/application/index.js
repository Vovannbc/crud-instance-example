import * as React from 'react';
import { Navigation } from '../components';
import routes from '../routes';
import { useRoutes } from 'react-router-dom';

const AppContainer = () => {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <Navigation />
      {appRoutes}
    </>
  );
};

export default AppContainer;
