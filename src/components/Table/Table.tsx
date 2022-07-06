import React, { PropsWithChildren, TableHTMLAttributes } from 'react';
import styled from 'styled-components';

import TableStyled from './Table.styled';

const TableWrap = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = ({ children, ...props }: PropsWithChildren<TableHTMLAttributes<never>>) => {
  return (
    <TableWrap>
      <TableStyled {...props}>{children}</TableStyled>
    </TableWrap>
  );
};

export default Table;
