import React from 'react';
import { CreateWishItemForm } from '../../../components';
import { useDatabase } from '../../../hooks/useDatabase';

const CreateItem = ({ closeForm }) => {
  const { createNewUserWishItem } = useDatabase();

  const createItem = (values) => {
    createNewUserWishItem(values, () => {
      closeForm();
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Add to wish list!</h1>
      <CreateWishItemForm onSubmit={createItem} initialValues={{}} />
    </div>
  );
};

export default CreateItem;
