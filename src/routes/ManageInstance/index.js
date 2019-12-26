import React, { useState } from "react";
import PropTypes from "prop-types";
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

  const renderForm = () => (
    <div className={classes.fullList} role="presentation">
      <CreateInstance />
    </div>
  );
  return (
    <div>
      <h2>Manage instance</h2>
      <Button onClick={() => setOpenForm(true)}>Create Instance</Button>
      <SwipeableDrawer
        anchor="top"
        open={openForm}
        onClose={() => setOpenForm(false)}
        onOpen={() => setOpenForm(true)}
      >
        {renderForm()}
      </SwipeableDrawer>
    </div>
  );
};

ManagePage.propTypes = {};

export default ManagePage;
