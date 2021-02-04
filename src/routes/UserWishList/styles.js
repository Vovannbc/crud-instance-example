import styled from 'styled-components';
import { Card, List as MaterialList } from '@material-ui/core';

export const List = styled(MaterialList)`
  list-style: none;
  flex: 1;
  width: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: ${({ theme }) => theme.primary.main};
`;

export const PaperItem = styled(Card)`
  margin: 0 20px 20px 20px;
  padding: 10px;
  display: flex;
`;

export const PaperItemImage = styled.img`
  width: 150px;
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