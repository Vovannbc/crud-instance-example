import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const ButtonStyled = styled(Button)`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.primary.main};
  :hover {
    background-color: ${({ theme }) => theme.secondary.main};
  }
`;

export const SubmitButton = (props) => (
  <ButtonStyled variant="contained" type="submit" {...props} />
);
