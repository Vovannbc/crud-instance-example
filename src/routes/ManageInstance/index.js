import React, { useState } from "react";
import { Button, makeStyles, SwipeableDrawer } from "@material-ui/core";
import CreateInstance from "./containers/CreateInstance";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const ManagePage = props => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenForm(true)}>Create Instance</Button>
      <SwipeableDrawer
        anchor="top"
        open={openForm}
        onClose={() => setOpenForm(false)}
        onOpen={() => setOpenForm(true)}
      >
        <div className={classes.fullList} role="presentation">
          <CreateInstance />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default ManagePage;
