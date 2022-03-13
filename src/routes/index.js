import * as React from 'react';
import NotFound from './NotFound';
import UserWishList from './UserWishList';
import Home from './Home';
import Profile from './Profile';
import WelcomePage from '../components/WelcomePage';

export const ROUTE_TYPES = {
  HOME: 'HOME',
  MANAGE: 'MANAGE',
  USER_WISH_LIST: 'USER_WISH_LIST',
  PROFILE: 'PROFILE',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  AUTH: 'AUTH',
  NOTFOUND: 'NOTFOUND'
};

const routes = [
  {
    path: '/profile',
    opened: true,
    element: <Profile />
  },
  {
    path: '/:uid',
    opened: true,
    element: <UserWishList />
  },
  {
    path: '/',
    opened: true,
    element: <Home />,
    children: [
      {
        path: '/list',
        element: <UserWishList />
      },
      {
        path: '/welcome',
        element: <WelcomePage />
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    element: <NotFound />
  }
];

export default routes;
