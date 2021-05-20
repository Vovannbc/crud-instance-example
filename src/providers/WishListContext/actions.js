import { types } from './reducer';
import { database } from '../../index';

export const actions = {
  [types.FETCH_USER_LIST]: (dispatch) => (uid) => {
    const docRef = database.ref('/instanses/' + uid);
    let value = {};
    docRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        value = {
          ...value,
          [childSnapshot.key]: { id: childSnapshot.key, ...childSnapshot.val() }
        };
      });
      dispatch({ type: types.SET_LIST, payload: value });
    });
  }
};
