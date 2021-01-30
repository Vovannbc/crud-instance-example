import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_MAP, UNAUTHORIZED_NAVIGATION_MAP } from "./constants";
import { UserContext } from "../../providers";
import Auth from "../../routes/Auth";
import { Button, SwipeableDrawer } from "@material-ui/core";
import LoggedButtons from "./LoggedButtons";
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Navigation = ({ routes }) => {
  console.log(routes);
  const {
    user: { uid }
  } = useContext(UserContext);
  const [openForm, setOpenForm] = useState(false);
  const openAuthForm = () => setOpenForm(true);
  const closeAuthForm = () => setOpenForm(false);

  const isAuthorised = Boolean(uid);

  return (
    <>
      <NavContainer>
        {Object.values(routes).map(
          route =>
            (isAuthorised
              ? NAVIGATION_MAP[route.key]
              : UNAUTHORIZED_NAVIGATION_MAP[route.key]) && (
              <Link to={route.path} key={route.key} style={{ marginRight: 10 }}>
                {route.key.toUpperCase()}
              </Link>
            )
        )}
        {!isAuthorised && (
          <Button onClick={openAuthForm}>Auth</Button>
        )}
        {isAuthorised && <LoggedButtons />}
      </NavContainer>
      <SwipeableDrawer
        anchor="right"
        open={openForm}
        onClose={closeAuthForm}
        onOpen={openAuthForm}
      >
        <Auth closeAuth={closeAuthForm} />
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
