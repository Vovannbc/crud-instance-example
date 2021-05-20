export const initialState = {
  list: []
};

export const types = {
  SET_LIST: 'SET_LIST',
  FETCH_USER_LIST: 'FETCH_USER_LIST',
  UPDATE_USER_LIST: 'UPDATE_INSTANCE',
  DELETE_USER_WISH_ITEM: 'DELETE_USER_WISH_ITEM'
};

export const reducers = {
  [types.SET_LIST]: (state, list) => ({
    ...state,
    list
  })
};
