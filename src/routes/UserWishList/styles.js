import styled from 'styled-components';
import { List as MaterialList } from '@material-ui/core';

export const List = styled(MaterialList)`
  list-style: none;
  background-color: ${({ theme }) => theme.primary.main};
  flex: 1;
`;
