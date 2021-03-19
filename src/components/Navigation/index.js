import React, { useState } from 'react';
import Auth from '../../routes/Auth';
import { SwipeableDrawer, Toolbar } from '@material-ui/core';
import LoggedButtons from './LoggedButtons';
import styled from 'styled-components';

const NavContainer = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main};
  // border-bottom: 1px solid ${({ theme }) => theme.primary.contrastText};
  border-bottom: 1px solid ${({ theme }) => theme.primary.border};
`;

const Navigation = () => {
  const [openForm, setOpenForm] = useState(false);
  const openAuthForm = () => setOpenForm(true);
  const closeAuthForm = () => setOpenForm(false);

  return (
    <>
      <NavContainer>
        <LoggedButtons openAuthForm={openAuthForm} />
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
