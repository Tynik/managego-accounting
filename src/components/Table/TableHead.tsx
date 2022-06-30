import React, { createContext, HTMLAttributes, PropsWithChildren } from 'react';

import TableHeadStyled from '~/components/Table/TableHead.styled';

export const TableHeadContext = createContext(false);

const TableHead = ({ children, ...props }: PropsWithChildren<HTMLAttributes<any>>) => {
  return (
    <TableHeadStyled {...props}>
      <TableHeadContext.Provider value>{children}</TableHeadContext.Provider>{' '}
    </TableHeadStyled>
  );
};

export default TableHead;
