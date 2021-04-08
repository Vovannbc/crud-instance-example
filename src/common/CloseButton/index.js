import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export const CloseButton = (props) => (
  <IconButton {...props} aria-label="delete">
    <DeleteIcon fontSize={props.fontSize} />
  </IconButton>
);
