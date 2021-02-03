import React, { useContext } from 'react';
import { UserContext } from '../../providers';
import UserWishList from '../UserWishList';
import { WelcomePage } from '../../components';

const Home = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const isAuthorised = Boolean(uid);

  return isAuthorised ? <UserWishList /> : <WelcomePage />;
};

export default Home;
