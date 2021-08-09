import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const ButtonStyled = styled(Button)`
  background-color: ${({
    theme: {
      primary: { main }
    }
  }) => main};
  :hover {
    background-color: ${({
      theme: {
        secondary: { main }
      }
    }) => main};
  }
`;

export const LinkStyled = styled(Link)`
  background-color: ${({
    theme: {
      primary: { main }
    }
  }) => main};
  :hover {
    background-color: ${({
      theme: {
        secondary: { main }
      }
    }) => main};
  }
`;
export const SubmitButton = (props) => (
  <ButtonStyled variant="contained" type="submit" {...props} />
);

export const CloseButton = (props) => (
  <IconButton {...props} aria-label="delete">
    <DeleteIcon fontSize={props.fontSize} />
  </IconButton>
);

export const EditButton = (props) => (
  <IconButton {...props} aria-label="delete">
    <EditIcon fontSize={props.fontSize} />
  </IconButton>
);
