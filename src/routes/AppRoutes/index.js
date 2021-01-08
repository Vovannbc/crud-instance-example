import React, {useContext, useEffect} from 'react';
import routes from "../index";
import {Route, Switch, useHistory} from "react-router-dom";
import {UserContext} from "../../providers";

const AppRoutes = () => {
  const { user: { isAuthorised } } = useContext(UserContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!isAuthorised) {
      push('/login');
    }
  }, [push, isAuthorised])

  return (
    <Switch>
      {Object.values(routes).map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
};

export default AppRoutes;
