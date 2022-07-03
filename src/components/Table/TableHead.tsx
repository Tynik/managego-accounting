import React, { createContext, HTMLAttributes, PropsWithChildren } from 'react';

import TableHeadStyled from './TableHead.styled';

export const TableHeadContext = createContext(false);

const TableHead = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  return (
    <TableHeadStyled {...props}>
      <TableHeadContext.Provider value>{children}</TableHeadContext.Provider>
    </TableHeadStyled>
  );
};

export default TableHead;
