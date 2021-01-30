import React, { createContext, useEffect, useMemo, useState } from "react";
import { fireAuth } from "../../index";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fireAuth.onAuthStateChanged(userAuth => {
      if (userAuth) setUser({ ...userAuth });
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser
    }),
    [user, setUser]
  );
  console.log(user);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
