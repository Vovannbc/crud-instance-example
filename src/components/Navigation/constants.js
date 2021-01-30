import routes from '../../routes';

export const NAVIGATION_TYPES = {
  HOME: 'home',
  MANAGE: 'manage',
  LIST: 'list',
  AUTH: 'auth'
};

export const NAVIGATION_MAP = {
  [NAVIGATION_TYPES.HOME]: routes[NAVIGATION_TYPES.HOME],
  [NAVIGATION_TYPES.LIST]: routes[NAVIGATION_TYPES.LIST]
};

export const UNAUTHORIZED_NAVIGATION_MAP = {

};
