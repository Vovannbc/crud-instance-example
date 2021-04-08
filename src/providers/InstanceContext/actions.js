import { types } from './reducer';
import { database } from '../../index';

export const actions = {
  [types.FETCH_INSTANCES]: (dispatch) => (uid) => {
    const docRef = database.ref('/instanses/' + uid);
    let value = {};
    docRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        value = {
          ...value,
          [childSnapshot.key]: { id: childSnapshot.key, ...childSnapshot.val() }
        };
      });
      dispatch({ type: types.SET_INSTANCES, payload: value });
    });
  },
  [types.UPDATE_INSTANCE]: (dispatch) => async (item, uid, data) => {
    const instanceData = {
      ...item,
      ...data
    };
    const updates = {};
    updates[`/instanses/${uid}/${item.id}`] = instanceData;
    return database.ref().update(updates);
  },
  [types.DELETE_INSTANCE]: (dispatch) => (uid, id) => {
    database.ref(`/instanses/${uid}/${id}`).remove();
  }
};
