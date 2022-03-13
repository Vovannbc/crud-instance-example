import {
  child,
  onValue,
  push,
  ref,
  update,
  get,
  getDatabase
} from 'firebase/database';
import { database } from '../index';
import { types } from '../providers/WishListContext/reducer';

export const databaseTypes = {
  instances: 'instanses'
};

export const createItemByType = (instanceType, uid, values) => {
  const newItemKey = push(child(ref(database), `${instanceType}/`)).key;
  const updates = {};
  updates[`${instanceType}/${uid}/${newItemKey}`] = values;
  update(ref(database), updates);
};

export const readItemsByType = (instanceType, uid, dispatch) => {
  const docRef = ref(database, `${instanceType}/${uid}`);
  let value = {};
  onValue(docRef, (snapshot) => {
    value = snapshot.val();
    dispatch({ type: types.SET_LIST, payload: value });
    // if (snapshot.exists()) {
    // snapshot.forEach((childSnapshot) => {
    //   value = {
    //     ...value,
    //     [childSnapshot.key]: { id: childSnapshot.key, ...childSnapshot.val() }
    //   };
    // });
    // }
    // return {};
  });
  // console.log(value);

  // return value;
};

export const readItemsByTypeOnce = (instanceType, uid) => {
  const docRef = ref(database, `${instanceType}/${uid}`);
  let value = {};
  get(child(docRef)).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        value = {
          ...value,
          [childSnapshot.key]: { id: childSnapshot.key, ...childSnapshot.val() }
        };
      });
    }
  });

  return value;
};

export const updateItemByType = (instanceType, uid, itemData) => {
  return update(
    ref(database, `${instanceType}/${uid}/${itemData.id}`),
    itemData
  );
};

// export const deleteItemByType = () => {};
