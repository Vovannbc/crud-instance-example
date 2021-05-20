import React, { useContext, useEffect } from 'react';
import { WishListContext, UserContext } from '../../providers';
import ManagePage from '../ManageInstance';
import {
  Container,
  List,
  PaperItem,
  PaperItemImage,
  PaperItemTitle,
  PaperItemDescription
} from './styles';
import Button from '@material-ui/core/Button';

const UserWishList = () => {
  const {
    user: { uid }
  } = useContext(UserContext);
  const [wishListState, wishListActions] = useContext(WishListContext);

  const { FETCH_USER_LIST } = wishListActions;
  const { list } = wishListState;

  useEffect(() => {
    FETCH_USER_LIST(uid);
  }, [uid]);

  return (
    <Container>
      <List>
        {Object.values(list).map(({id, title, description, url, image}) => (
          <li key={id}>
            <PaperItem elevation={1}>
              <div>
                <PaperItemTitle>{title}</PaperItemTitle>
                <PaperItemDescription>
                  {description}
                </PaperItemDescription>
                {url && <Button
                  variant="contained"
                  color="primary"
                  href={url}
                  target="_blank"
                >
                  Open shop
                </Button>}
              </div>
              {image?.length && (
                <PaperItemImage src={image} alt={title} />
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
