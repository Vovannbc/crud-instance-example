import styled from 'styled-components';
import { Card, List as MaterialList } from '@material-ui/core';
import { CloseButton } from '../../common';

export const List = styled(MaterialList)`
  list-style: none;
  flex: 1;
  max-width: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.primary.background};
`;

export const PaperItem = styled(Card)`
  margin: 20px;
  padding: 10px;
  display: flex;
  position: relative;

  background-color: ${({ checked, theme }) =>
    checked ? theme.secondary.background : ''};
`;

export const PaperItemImage = styled.img`
  height: 150px;
  max-width: 100%;
`;

export const PaperItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const PaperItemDescription = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const CloseButtonStyled = styled(CloseButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  font-size: 1em;
`;
