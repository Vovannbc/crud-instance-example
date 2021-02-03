import NotFound from './NotFound';
import Manage from './ManageInstance';
import UserWishList from './UserWishList';
import AppRoutes from './AppRoutes';
import Home from './Home';

export const ROUTE_TYPES = {
  HOME: 'home',
  MANAGE: 'manage',
  USER_WISH_LIST: 'user-wish-list',
  LOGIN: 'login',
  REGISTER: 'register',
  AUTH: 'auth',
  NOTFOUND: 'notfound'
};

const routes = {
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
