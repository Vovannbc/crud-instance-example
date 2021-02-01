import React, {useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../providers";
import UserWishList from "../UserWishList";
import { WelcomePage } from "../../components";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
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
