import NotFound from './NotFound';
import Manage from './ManageInstance';
import UserWishList from './UserWishList';
import AppRoutes from './AppRoutes';
import Home from './Home';
import Profile from './Profile';

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

const routes = {
  [ROUTE_TYPES.PROFILE]: {
    key: 'profile',
    path: '/profile',
    opened: true,
    component: Profile
  },
  [ROUTE_TYPES.USER_WISH_LIST]: {
    key: 'list',
    path: '/:uid',
    opened: true,
    component: UserWishList
  },
  [ROUTE_TYPES.HOME]: {
    key: 'home',
    path: '/',
    opened: true,
    component: Home
  },
  [ROUTE_TYPES.NOTFOUND]: {
    key: 'notfound',
    path: '*',
    name: 'notfound',
    component: NotFound
  }
};

export default routes;

export { NotFound, UserWishList, Manage, AppRoutes };
