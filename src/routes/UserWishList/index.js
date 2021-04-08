import React, { useContext, useEffect } from 'react';
import { InstanceContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import {
  Container,
  List,
  PaperItem,
  PaperItemImage,
  PaperItemTitle,
  PaperItemDescription,
  CloseButtonStyled
} from './styles';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { ButtonStyled } from '../../common';
import { useHistory } from 'react-router-dom';

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [{ instances }, instanceActions] = useContext(InstanceContext);
  const history = useHistory();
  const pathname = history.location.pathname;
  const externalUserId = pathname.replace('/', '');

  const { FETCH_INSTANCES, UPDATE_INSTANCE, DELETE_INSTANCE } = instanceActions;
  const fetchId = externalUserId || uid;
  const externalList = Boolean(externalUserId);

  useEffect(() => {
    FETCH_INSTANCES(fetchId);
  }, [fetchId]);

  const items = Object.values(instances);

  const handleDone = async (item, checked) => {
    await UPDATE_INSTANCE(item, uid, { checked });
    FETCH_INSTANCES(uid);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await DELETE_INSTANCE(uid, id);
    FETCH_INSTANCES(uid);
  };

  return (
    <Container>
      <List>
        {!items.length && <Box>There are no any items in this list!</Box>}
        {items.map((item) => {
          const {
            id,
            title,
            description,
            url,
            image,
            price = '',
            checked = false
          } = item;
          return (
            <li key={id}>
              <PaperItem elevation={1} checked={checked}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                  width="100%"
                >
                  <Box>
                    <PaperItemTitle>{title}</PaperItemTitle>
                    {description && (
                      <PaperItemDescription>{description}</PaperItemDescription>
                    )}
                    {price && <div>{price}</div>}
                    {url && (
                      <ButtonStyled
                        variant="contained"
                        href={url}
                        target="_blank"
                      >
                        Open shop
                      </ButtonStyled>
                    )}
                    {!externalList && (
                      <Checkbox
                        checked={checked}
                        onChange={(e) => handleDone(item, e.target.checked)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    )}
                  </Box>
                  {image?.length && ( // todo need to align image correctly
                    <Box width="50%" margin="20px 0 0">
                      <PaperItemImage src={image} alt={title} />
                    </Box>
                  )}
                </Box>
                {!externalList && (
                  <CloseButtonStyled
                    fontSize="small"
                    onClick={(e) => handleDelete(e, id)}
                  />
                )}
              </PaperItem>
            </li>
          );
        })}
      </List>
      <ManagePage />
    </Container>
  );
};

export default UserWishList;
