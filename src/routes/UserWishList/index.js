import React, { useContext, useEffect } from 'react';
import { InstanceContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import { Container, List, PaperItem, PaperItemImage, PaperItemTitle, PaperItemDescription } from './styles';
import Button from '@material-ui/core/Button';

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
              <div>
                <PaperItemTitle>{instance.title}</PaperItemTitle>
                <PaperItemDescription>{instance.description}</PaperItemDescription>
                <Button variant="contained" color="primary" href={instance.url} target='_blank'>
                  Open shop
                </Button>
              </div>
              {instance?.image?.length && (
                <PaperItemImage
                  src={instance.image}
                  alt={instance.title}
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
