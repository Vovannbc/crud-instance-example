import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { InstanceContext, UserContext } from "../../providers";
import ManagePage from "../ManageInstance";
import {List} from "./styles";
import {Badge, Paper} from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [instanceState, instanceActions] = useContext(InstanceContext);
  console.log(instanceState, instanceActions);

  const { FETCH_USER_INSTANCES } = instanceActions;
  const { instances } = instanceState;

  useEffect(() => {
    FETCH_USER_INSTANCES(uid);
  }, []);
  console.log(instances);

  return (
    <Container>
      <ManagePage />
      <List>
        {Object.values(instances).map((instance, index) => (
          <li key={instance.id}>
            <Paper elevation={3} style={{ margin: 20 }}>
              <span>{instance.title}</span>
              {instance?.image?.length && (
                <img
                  src={instance.image}
                  alt={instance.title}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </Paper>
          </li>
        ))}
      </List>
      <p>Above will be list of instances</p>
    </Container>
  );
};

export default UserWishList;
