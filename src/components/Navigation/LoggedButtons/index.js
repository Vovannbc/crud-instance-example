import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fireAuth } from '../../../index';
import styled from 'styled-components';
import { UserContext } from '../../../providers';
import { ButtonStyled } from '../../../common';

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
      .finally(() => push('/'));
  };

  return isAuthorised ? (
    <Container>
      <Link to="/">My List</Link>
      <ButtonStyled onClick={signOut}>Logged out</ButtonStyled>
    </Container>
  ) : (
    <ButtonStyled onClick={openAuthForm}>Auth</ButtonStyled>
  );
};

export default LoggedButtons;
