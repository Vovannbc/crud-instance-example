import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, SwipeableDrawer } from '@material-ui/core';
import CreateInstance from './containers/CreateInstance';

const CreateInstanceContainer = styled.div`
  width: auto;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.secondary.main};
  }
`;

const ManagePage = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
      <StyledButton variant="outlined" onClick={() => setOpenForm(true)}>
        Create Instance
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
