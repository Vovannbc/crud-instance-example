import React, { useContext, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { AuthForm, TabPanel } from '../../components';
import { UserContext } from '../../providers';
import { AppBar, IconButton, Snackbar } from '@material-ui/core';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

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

  const { setUser } = useContext(UserContext);
  const handleChangeTab = (event, newValue) => setTab(newValue);
  const navigate = useNavigate();

  const loginSubmit = (values) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          const {
            additionalUserInfo: { isNewUser },
            user: { displayName, email, emailVerified, phoneNumber, uid }
          } = res;
          setUser({
            displayName,
            isNewUser,
            email,
            emailVerified,
            phoneNumber,
            uid
          });
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
        setTimeout(() => {
          closeAuth();
          navigate('/');
        }, 2000);
      });
  };

  const registerSubmit = (values) => {
    const { email, password } = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          const {
            additionalUserInfo: { isNewUser },
            user: { displayName, email, emailVerified, phoneNumber, uid }
          } = res;
          setUser({
            displayName,
            isNewUser,
            email,
            emailVerified,
            phoneNumber,
            uid
          });
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
        setTimeout(() => {
          closeAuth();
          navigate('/');
        }, 2000);
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
