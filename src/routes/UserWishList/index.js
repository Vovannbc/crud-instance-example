import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers";
import { database } from "../../index";
import ManagePage from "../ManageInstance";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserWishList = () => {
  const [instances, setInstances] = useState([]);
  const {
    user: { uid }
  } = useContext(UserContext);

  const docRef = database.ref("/instanses/" + uid);

  const getFirebaseInstances = async () => {
    const value = [];
    docRef.once("value", snapshot => {
      console.log(snapshot);
      snapshot.forEach(childSnapshot => {
        value.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      setInstances(value);
    });
  };

  useEffect(() => {
    getFirebaseInstances();
  }, []);
  console.log(instances);

  return (
    <Container>
      <ManagePage />
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <span>{instance.title}</span>
            {instance?.image?.length && (
              <img
                src={instance.image}
                alt={instance.title}
                style={{ width: 50, height: 50 }}
              />
            )}
          </li>
        ))}
      </ul>
      <p>Above will be list of instances</p>
    </Container>
  );
};

export default UserWishList;
