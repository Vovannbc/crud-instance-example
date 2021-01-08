import React, {createContext, useMemo, useState} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    isAuthorised: false
  });

  const value = useMemo(() => ({
    user,
    setUser
  }), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
