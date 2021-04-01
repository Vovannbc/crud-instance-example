export const initialState = {
  instances: []
};

export const types = {
  SET_INSTANCES: 'SET_INSTANCES',
  FETCH_USER_INSTANCES: 'FETCH_USER_INSTANCES',
  SET_DONE_USER_INSTANCES: 'SET_DONE_USER_INSTANCES'
};

export const reducers = {
  [types.SET_INSTANCES]: (state, instances) => ({
    ...state,
    instances
  })
};
