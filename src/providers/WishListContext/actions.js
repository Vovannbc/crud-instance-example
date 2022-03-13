import { types } from './reducer';
import { getDatabase, ref, remove } from 'firebase/database';
import {
  databaseTypes,
  readItemsByType,
  // readItemsByTypeOnce,
  updateItemByType
} from '../../database';

export const actions = {
  [types.FETCH_USER_LIST]: (dispatch) => async (uid) => {
    readItemsByType(databaseTypes.instances, uid, dispatch);
    // console.log(value);
    // dispatch({ type: types.SET_LIST, payload: value });
  },

  [types.UPDATE_USER_LIST]: (dispatch) => async (item, uid, data) => {
    const itemData = {
      ...item,
      ...data
    };

    await updateItemByType(databaseTypes.instances, uid, itemData);
    dispatch({ type: types.FETCH_USER_LIST, payload: uid });
  },
  [types.DELETE_USER_WISH_ITEM]: (dispatch) => (uid, id) => {
    const database = getDatabase();

    remove(ref(database, `/instanses/${uid}/${id}`));
    dispatch({ type: types.FETCH_USER_LIST, payload: uid });
  }
};
