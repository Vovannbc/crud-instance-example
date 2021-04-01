import React, { useContext, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { AuthForm, TabPanel } from '../../components';
import { UserContext } from '../../providers';
import { AppBar, IconButton, Snackbar } from '@material-ui/core';
import { fireAuth } from '../../index';

const StyledTab = styled(Tab)`
  color: #000;
  opacity: 1;
  background-color: ${({ theme }) => theme.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.primary.light};
  }
  width: 50%;
`;

const tabProps = (index) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`
});

const Auth = ({ closeAuth }) => {
  const [tab, setTab] = useState(0);
  const [message, setMessage] = useState(null);

  const { user, setUser } = useContext(UserContext);
  const handleChangeTab = (event, newValue) => setTab(newValue);

  const loginSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    setSubmitting(true);
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          setUser({ ...user });
          setMessage(
            `Congratulations! ${email}, you are logged in successfully!`
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setMessage(e.message);
      })
      .finally(() => {
        setSubmitting(false);
        setTimeout(() => closeAuth(), 2000);
      });
  };

  const registerSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    setSubmitting(true);
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          setUser(res);
          setMessage(
            `Congratulations! ${email}, you are registered successfully!`
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setMessage(e.message);
      })
      .finally(() => {
        setSubmitting(false);
        setTimeout(() => closeAuth(), 2000);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage(null);
  };

  return (
    <>
      <Container>
        <AppBar position="static">
          <Tabs value={tab} onChange={handleChangeTab} aria-label="tabs">
            <StyledTab label="Login" {...tabProps(0)} />
            <StyledTab label="Register" {...tabProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tab} index={0}>
          <AuthForm title="Login form" onSubmit={loginSubmit} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <AuthForm title="Register form" onSubmit={registerSubmit} />
        </TabPanel>
      </Container>
      {message && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={!!message}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      )}
    </>
  );
};

export default Auth;
