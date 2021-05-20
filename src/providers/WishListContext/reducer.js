export const initialState = {
  list: []
};

export const types = {
  SET_LIST: 'SET_LIST',
  FETCH_USER_LIST: 'FETCH_USER_LIST'
};

export const reducers = {
  [types.SET_LIST]: (state, list) => ({
      ...state,
      list
    })
};
