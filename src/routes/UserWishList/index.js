import React, { useContext, useEffect } from 'react';
import { InstanceContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import {
  Container,
  List,
  PaperItem,
  PaperItemImage,
  PaperItemTitle,
  PaperItemDescription
} from './styles';
import Box from '@material-ui/core/Box';
import { ButtonStyled } from '../../common';
import Checkbox from '@material-ui/core/Checkbox';

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [{ instances }, instanceActions] = useContext(InstanceContext);

  const { FETCH_USER_INSTANCES } = instanceActions;

  useEffect(() => {
    FETCH_USER_INSTANCES(uid);
  }, [uid]);

  const items = Object.values(instances);
  console.log(instances);

  const handleChange = () => {};

  return (
    <Container>
      <List>
        {!items.length && <Box>There are no any items in this list!</Box>}
        {items.map(
          ({
            id,
            title,
            description,
            url,
            image,
            price = '',
            checked = false
          }) => (
            <li key={id}>
              <PaperItem elevation={1}>
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
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                  {image?.length && <PaperItemImage src={image} alt={title} />}
                </Box>
              </PaperItem>
            </li>
          )
        )}
      </List>
      <ManagePage />
    </Container>
  );
};

export default UserWishList;
