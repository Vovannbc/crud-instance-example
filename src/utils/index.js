import { useMemo } from "react";

export const combineReducers = (handlers = {}, customHandlers = {}) => {
  const mergedHandlers = { ...handlers, ...customHandlers };
  return (state = {}, { type, payload }) => {
    try {
      return mergedHandlers[type]
        ? mergedHandlers[type](state, payload)
        : state;
    } catch (e) {
      console.log(e, { type });
      return state;
    }
  };
};

const applyMiddleware = (dispatch) => action => {
  if (typeof action === "function") {
    return action(dispatch);
  }

  return dispatch(action);
};

const getActionCreators = (actionCreators, dispatch) =>
  Object.entries(actionCreators).reduce(
    (memo, [type, action]) => ({
      ...memo,
      [type]:
        typeof action === "function"
          ? dispatch(action)
          : payload => dispatch({ type, payload })
    }),
    {}
  );

export const useActions = (
  types,
  dispatch,
  customActionCreators = {}
) => {
  const enhancedDispatch = applyMiddleware(dispatch);
  const actionCreators = { ...types, ...customActionCreators };

  return useMemo(() => getActionCreators(actionCreators, enhancedDispatch), [
    types,
    customActionCreators
  ]);
};

