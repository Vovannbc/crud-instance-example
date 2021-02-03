import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { InstanceContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import { List } from './styles';
import { Card } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const PaperItem = styled(Card)`
  margin: 0 20px 20px 20px;
`;

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [instanceState, instanceActions] = useContext(InstanceContext);

  const { FETCH_USER_INSTANCES } = instanceActions;
  const { instances } = instanceState;

  useEffect(() => {
    FETCH_USER_INSTANCES(uid);
  }, [uid]);
  console.log(instances);

  return (
    <Container>
      <List>
        {Object.values(instances).map((instance) => (
          <li key={instance.id}>
            <PaperItem elevation={1}>
              <span>{instance.title}</span>
              {instance?.image?.length && (
                <img
                  src={instance.image}
                  alt={instance.title}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </PaperItem>
          </li>
        ))}
      </List>
      <ManagePage />
    </Container>
  );
};

export default UserWishList;
