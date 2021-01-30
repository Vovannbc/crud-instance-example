import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {UserContext} from "../../providers";
import { firestore } from '../../index';
import {Button} from "@material-ui/core";
import ManagePage from "../ManageInstance";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserWishList = () => {
  const [instances, setInstances] = useState([]);
  const { user: { uid } } = useContext(UserContext);


  const getFirebaseInstances = () => {

  }

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
            <span>{instance.description}</span>
            {instance.image.length && (
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
