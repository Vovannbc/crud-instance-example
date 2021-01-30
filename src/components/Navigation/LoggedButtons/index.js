import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { fireAuth } from "../../../index";
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
`;

const LoggedButtons = () => {
  const { push } = useHistory();
  const signOut = () => {
    fireAuth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(console.error)
      .finally(() => {
        push("/");
      });
  };
  return (
    <Container>
      <Button>Profile</Button>
      <Button onClick={signOut}>Logged out</Button>
    </Container>
  );
};

export default LoggedButtons;
