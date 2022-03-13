import { useCallback, useContext } from 'react';
import { UserContext } from '../providers';
import { createItemByType, databaseTypes } from '../database';

export const useDatabase = () => {
  const {
    user: { uid }
  } = useContext(UserContext);

  const createNewUserWishItem = useCallback(
    (values, cb) => {
      createItemByType(databaseTypes.instances, uid, values);
      if (cb) {
        cb();
      }
    },
    [uid]
  );

  return {
    createNewUserWishItem
  };
};
