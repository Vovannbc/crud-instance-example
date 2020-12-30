import routes from '../../routes';

export const NAVIGATION_TYPES = {
  MANAGE: 'manage',
  DISPLAY: 'display',
};

export const NAVIGATION_MAP = {
  [NAVIGATION_TYPES.MANAGE]: routes[NAVIGATION_TYPES.MANAGE],
  [NAVIGATION_TYPES.DISPLAY]: routes[NAVIGATION_TYPES.DISPLAY]
};
