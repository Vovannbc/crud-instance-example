import { types } from "./reducer";
import { database } from "../../index";

export const actions = {
  [types.FETCH_USER_INSTANCES]: dispatch => uid => {
    const docRef = database.ref("/instanses/" + uid);
    let value = {};
    docRef.once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        console.log(childSnapshot);
        value = {
          ...value,
          [childSnapshot.key]: { id: childSnapshot.key, ...childSnapshot.val() }
        };
      });
      dispatch({ type: types.SET_INSTANCES, payload: value });
    });
  }
};
