import * as React from 'react';
import firebase from 'firebase/compat/app';

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  window.onload = () => setLoading(true);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { uid, displayName, phoneNumber, email, emailVerified } =
          userAuth;
        setUser({
          displayName,
          email,
          emailVerified,
          phoneNumber,
          uid
        });
      }
      setLoading(false);
    });
  }, []);

  const value = React.useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading
    }),
    [user, setUser, loading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
