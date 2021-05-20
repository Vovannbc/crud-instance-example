import React, { createContext, useMemo, useReducer } from 'react';
import { combineReducers, useActions } from '../../utils';
import { types, reducers, initialState } from './reducer';
import { actions as actionCreators } from './actions';

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const memoReducers = useMemo(() => combineReducers(reducers), []);
  const [state, dispatch] = useReducer(memoReducers, initialState);

  const actions = useActions(types, dispatch, actionCreators);

  return (
    <WishListContext.Provider value={[state, actions]}>
      {children}
    </WishListContext.Provider>
  );
};
