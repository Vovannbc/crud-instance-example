import React, { useState } from 'react';
import { Button, makeStyles, SwipeableDrawer } from '@material-ui/core';
import CreateInstance from './containers/CreateInstance';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const ManagePage = () => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <div>
      <Button onClick={() => setOpenForm(true)}>Create Instance</Button>
      <SwipeableDrawer
        anchor="top"
        open={openForm}
        onClose={handleCloseForm}
        onOpen={handleOpenForm}
      >
        <div className={classes.fullList} role="presentation">
          <CreateInstance closeForm={handleCloseForm} />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default ManagePage;
