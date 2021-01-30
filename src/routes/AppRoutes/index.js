import React, { useContext } from "react";
import routes, { ROUTE_TYPES } from "../index";
import { Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "../../providers";

const PrivateRoute = ({ component: Component, isAuthorised, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthorised ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AppRoutes = () => {
  const {
    user: { isAuthorised }
  } = useContext(UserContext);

  return (
    <Switch>
      {Object.values(routes).map(route => (
        <Route {...route} />
      ))}
      <PrivateRoute
        path={routes[ROUTE_TYPES.USER_WISH_LIST].path}
        isAuthorised={isAuthorised}
        component={routes[ROUTE_TYPES.USER_WISH_LIST].component}
      />
    </Switch>
  );
};

export default AppRoutes;
