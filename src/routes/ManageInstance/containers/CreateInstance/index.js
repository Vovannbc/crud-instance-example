import React from "react";
import CreateInstanceForm from "../../components/CreateInstanceForm";
import { postData } from "utils/fetch";

const CreateInstance = props => {
  const createInstance = (values, actions) => {
    const data = { ...values, id: 2 };
    const url =
      "https://my-json-server.typicode.com/Vovannbc/crud-instance-example/instances";
    console.log(values);

    postData(url, data).then(res => console.log(res));
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
