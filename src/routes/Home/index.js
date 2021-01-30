import React, {useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../providers";
import UserWishList from "../UserWishList";
import { WelcomePage } from "../../components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  const {user: { uid }} = useContext(UserContext);
  const isAuthorised = Boolean(uid);

  return (
    <Container>
      {isAuthorised ? <UserWishList /> : <WelcomePage />}
    </Container>
  );
};

export default Home;
