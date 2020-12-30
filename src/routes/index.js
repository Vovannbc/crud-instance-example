import NotFound from "./NotFound";
import Manage from "./ManageInstance";
import DisplayInstance from "./DisplayInstance";

export const ROUTE_TYPES = {
  MANAGE: 'manage',
  DISPLAY: 'display',
  NOTFOUND: 'notfound'
};

const routes = {
  [ROUTE_TYPES.MANAGE]: {
    key: "manage",
    path: "/",
    component: Manage
  },
  [ROUTE_TYPES.MANAGE]: {
    key: "manage",
    path: "/manage",
    component: Manage
  },
  [ROUTE_TYPES.DISPLAY]: {
    key: "display",
    path: "/display",
    component: DisplayInstance
  },
  [ROUTE_TYPES.NOTFOUND]: {
    key: "notfound",
    path: "*",
    name: "notfound",
    component: NotFound
  }
};

export default routes;

export { NotFound, DisplayInstance, Manage };
