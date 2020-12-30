import React from "react";
import { Link } from "@material-ui/core";
import { NAVIGATION_MAP } from "./constants";

const Navigation = ({ routes }) => (
  <nav>
    {Object.values(routes).map(route => NAVIGATION_MAP[route.key] && (
      <Link href={route.path} style={{ marginRight: 10 }}>
        {route.key.toUpperCase()}
      </Link>
    ))}
  </nav>
);

export default Navigation;
