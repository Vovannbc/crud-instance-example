import React, { createContext, useEffect, useMemo, useState } from 'react';
import { fireAuth } from '../../index';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  window.onload = () => setLoading(true);

  useEffect(() => {
    fireAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser({ ...userAuth });
        setLoading(false);
      }
    });
  }, []);

  const value = useMemo(
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
