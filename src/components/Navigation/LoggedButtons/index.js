import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../providers';
import { ButtonStyled } from '../../../common';
import firebase from 'firebase/compat/app';

const Container = styled.div`
  display: inline-flex;
`;

const LoggedButtons = ({ openAuthForm }) => {
  const navigate = useNavigate();
  const {
    user: { uid },
    setUser
  } = useContext(UserContext);
  const isAuthorised = !!uid;
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => setUser({}))
      .catch(console.error)
      .finally(() => navigate('/'));
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
