import React, { createContext, useMemo, useReducer } from "react";
import { combineReducers, useActions } from "../../utils";
import { types, reducers, initialState } from "./reducer";
import { actions as actionCreators } from "./actions";

export const InstanceContext = createContext();

export const InstanceContextProvider = ({ children }) => {
  const memoReducers = useMemo(() => combineReducers(reducers), []);
  const [state, dispatch] = useReducer(memoReducers, initialState);

  const actions = useActions(types, dispatch, actionCreators);

  return (
    <InstanceContext.Provider value={[state, actions]}>
      {children}
    </InstanceContext.Provider>
  );
};
