import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { fireAuth } from '../../../index';
import styled from 'styled-components';
import { UserContext } from '../../../providers';

const Container = styled.div`
  display: inline-flex;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.primary.light};
  }
`;

const LoggedButtons = ({ openAuthForm }) => {
  const { push } = useHistory();
  const {
    user: { uid },
    setUser
  } = useContext(UserContext);
  const isAuthorised = !!uid;
  const signOut = () => {
    fireAuth
      .signOut()
      .then(() => setUser({}))
      .catch(console.error)
      .finally(() => {
        push('/');
      });
  };

  return isAuthorised ? (
    <Container>
      <StyledButton>Profile</StyledButton>
      <StyledButton onClick={signOut}>Logged out</StyledButton>
    </Container>
  ) : (
    <StyledButton onClick={openAuthForm}>Auth</StyledButton>
  );
};

export default LoggedButtons;
