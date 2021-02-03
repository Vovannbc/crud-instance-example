import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { fireAuth } from '../../../index';
import styled from 'styled-components';
import { UserContext } from '../../../providers';

const Container = styled.div`
  display: inline-flex;
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
      <Button>Profile</Button>
      <Button onClick={signOut}>Logged out</Button>
    </Container>
  ) : (
    <Button onClick={openAuthForm}>Auth</Button>
  );
};

export default LoggedButtons;
