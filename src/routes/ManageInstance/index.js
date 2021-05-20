import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, SwipeableDrawer } from '@material-ui/core';
import CreateInstance from './CreateInstance';

const CreateInstanceContainer = styled.div`
  width: auto;
`;

const ManagePage = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpenForm(true)}>Create Instance</Button>
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
