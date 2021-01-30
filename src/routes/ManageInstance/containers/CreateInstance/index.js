import React from "react";
import CreateInstanceForm from "../../../../components/CreateInstanceForm";
import { postData } from "utils/fetch";
import { SERVER_URL } from "utils/constants";

const CreateInstance = () => {
  const createInstance = (values, actions) => {
    const data = { ...values, id: Date.now() };

    // postData(url, data).then(res => console.log(res));
  };


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create instance !</h1>
      <CreateInstanceForm onSubmit={createInstance} initialValues={{}} />
    </div>
  );
};

CreateInstance.propTypes = {};

export default CreateInstance;
