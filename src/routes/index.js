import NotFound from "./NotFound";
import Manage from "./ManageInstance";
import DisplayInstance from "./DisplayInstance";

export default function createRoutes() {
  return [
    {
      key: "manage",
      path: "/manage",
      component: Manage
    },
    {
      key: "display",
      path: "/display",
      component: DisplayInstance
    },
    {
      key: "notfound",
      path: "*",
      name: "notfound",
      component: NotFound
    }
  ];
}

export { NotFound, DisplayInstance, Manage };
