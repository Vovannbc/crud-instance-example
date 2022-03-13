import React, { useContext } from 'react';
import routes, { ROUTE_TYPES } from '../index';
import { Route, Navigate, Routes } from 'react-router-dom';
import { UserContext } from '../../providers';
import { LinearProgress } from '@material-ui/core';

const PrivateRoute = ({ component: Component, isAuthorised, ...rest }) => (
  <Route
    {...rest}
    element={(props) =>
      isAuthorised ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: '/auth',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
