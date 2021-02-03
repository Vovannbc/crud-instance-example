import React, { useContext } from 'react';
import CreateInstanceForm from '../../../../components/CreateInstanceForm';
import { database } from '../../../../index';
import { UserContext } from '../../../../providers';

const CreateInstance = ({ closeForm }) => {
  const {
    user: { uid }
  } = useContext(UserContext);

  const createInstance = (values, actions) =>
    database
      .ref('instanses/' + uid)
      .push()
      .set({
        ...values
      })
      .then(() => console.log('Data successfully written!'))
      .catch((error) => console.error('Error writing document: ', error))
      .finally(closeForm);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Create instance !</h1>
      <CreateInstanceForm onSubmit={createInstance} initialValues={{}} />
    </div>
  );
};

CreateInstance.propTypes = {};

export default CreateInstance;
