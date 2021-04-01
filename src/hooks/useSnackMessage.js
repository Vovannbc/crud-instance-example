import { IconButton, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

export const useSnackMessage = (m) => {
  const [message, setMessage] = useState(m);

  useEffect(() => {
    (() => setTimeout(() => setMessage(null), 3000))();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage(null);
  };

  return (
    message && (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={!!message}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    )
  );
};
