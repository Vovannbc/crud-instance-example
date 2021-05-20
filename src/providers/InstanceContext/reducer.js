export const initialState = {
  instances: []
};

export const types = {
  SET_INSTANCES: 'SET_INSTANCES',
  FETCH_INSTANCES: 'FETCH_INSTANCES',
  UPDATE_INSTANCE: 'UPDATE_INSTANCE',
  DELETE_INSTANCE: 'DELETE_INSTANCE'
};

export const reducers = {
  [types.SET_INSTANCES]: (state, instances) => ({
    ...state,
    instances
  })
};
