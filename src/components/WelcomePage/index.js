import React from 'react';
import Box from '@material-ui/core/Box';

const WelcomePage = () => {
  return (
    <Box flex={1}>
      <Box alignItems="center">
        <h1>This is Wish List Exchanger.</h1>
      </Box>
      <p>
        Please logged in to see your personal Wish List or Sign In to create
        last one.
      </p>
    </Box>
  );
};

export default WelcomePage;
