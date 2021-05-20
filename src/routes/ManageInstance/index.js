import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateInstance from './CreateInstance';

const CreateInstanceContainer = styled.div`
  width: auto;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.secondary.main};
  }
`;

const ManagePage = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);
  const theme = useContext(ThemeContext);

  return (
    <>
      <StyledButton variant="outlined" onClick={() => setOpenForm(true)}>
        <AddCircleOutlineIcon htmlColor={theme.primary.contrastText} />
      </StyledButton>
      <SwipeableDrawer
        anchor="top"
        open={openForm}
        onClose={handleCloseForm}
        onOpen={handleOpenForm}
      >
        <CreateInstanceContainer role="presentation">
          <CreateInstance closeForm={handleCloseForm} />
        </CreateInstanceContainer>
      </SwipeableDrawer>
    </>
  );
};

export default ManagePage;
