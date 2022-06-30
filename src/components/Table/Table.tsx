import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import TableStyled from '~/components/Table/Table.styled';

const TableWrap = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = ({ children, ...props }: PropsWithChildren<any>) => {
  return (
    <TableWrap>
      <TableStyled {...props}>{children}</TableStyled>
    </TableWrap>
  );
};

export default Table;
