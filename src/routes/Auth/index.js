import React, { useContext } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { AuthForm, TabPanel } from '../../components';
import { UserContext } from '../../providers';
import { AppBar } from '@material-ui/core';
import { fireAuth } from '../../index';

const StyledTab = styled(Tab)`
  color: #000;
  background-color: #42a5f5;
`;

const Auth = ({ closeAuth }) => {
  const [tab, setTab] = React.useState(0);

  const { user, setUser } = useContext(UserContext);
  const handleChangeTab = (event, newValue) => setTab(newValue);

  const loginSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    setSubmitting(true);
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) setUser({ ...user });
        alert(`Congratulations! ${email}, you are logged in successfully!`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Something went wrong! ${e}`);
      })
      .finally(() => {
        setSubmitting(false);
        closeAuth();
      });
  };

  const registerSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    setSubmitting(true);
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) setUser(res);
        alert(`Congratulations! ${email}, you are logged in successfully!`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Something went wrong! ${e}`);
      })
      .finally(() => {
        setSubmitting(false);
        closeAuth();
      });
  };

  return (
    <Container>
      <AppBar position="static">
        <Tabs value={tab} onChange={handleChangeTab} aria-label="tabs">
          <StyledTab label="Login" />
          <StyledTab label="Register" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <AuthForm title="Login form" onSubmit={loginSubmit} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AuthForm title="Register form" onSubmit={registerSubmit} />
      </TabPanel>
    </Container>
  );
};

export default Auth;
