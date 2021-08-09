import React, { useCallback, useContext, useEffect } from 'react';
import { WishListContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import {
  Container,
  List,
  PaperItem,
  PaperItemImage,
  PaperItemTitle,
  PaperItemDescription,
  CloseButtonStyled,
  EditButtonStyled
} from './styles';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { ButtonStyled } from '../../common';
import { useHistory } from 'react-router-dom';

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [wishListState, wishListActions] = useContext(WishListContext);
  const history = useHistory();
  const pathname = history.location.pathname;
  const externalUserId = pathname.replace('/', '');
  console.log(wishListState);
  const { FETCH_USER_LIST, UPDATE_USER_LIST, DELETE_USER_WISH_ITEM } =
    wishListActions;
  const { list } = wishListState;
  const fetchId = externalUserId || uid;
  const externalList = Boolean(externalUserId);

  useEffect(() => {
    FETCH_USER_LIST(fetchId);
  }, [fetchId]);

  const items = Object.values(list);
  console.log(useContext(WishListContext));

  const handleDone = useCallback(
    async (item, checked) => {
      await UPDATE_USER_LIST(item, uid, { checked });
      FETCH_USER_LIST(uid);
    },
    [uid]
  );

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await DELETE_USER_WISH_ITEM(uid, id);
    FETCH_USER_LIST(uid);
  };

  const handleEdit = (e, item) => {
    e.preventDefault();
  };

  return (
    <Container>
      <List>
        {items.length ? (
          items.map((item) => {
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
                        <PaperItemDescription>
                          {description}
                        </PaperItemDescription>
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
                    {!!image?.length && ( // todo need to align image correctly
                      <Box width="50%" margin="20px 0 0">
                        <PaperItemImage src={image} alt={title} />
                      </Box>
                    )}
                  </Box>
                  {!externalList && (
                    <Box>
                      <EditButtonStyled
                        fontSize="small"
                        onClick={(e) => handleEdit(e, item)}
                      />
                      <CloseButtonStyled
                        fontSize="small"
                        onClick={(e) => handleDelete(e, id)}
                      />
                    </Box>
                  )}
                </PaperItem>
              </li>
            );
          })
        ) : (
          <Box>There are no any items in this list!</Box>
        )}
      </List>
      <ManagePage />
    </Container>
  );
};

export default UserWishList;
