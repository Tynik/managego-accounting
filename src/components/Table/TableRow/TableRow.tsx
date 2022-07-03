import React, { HTMLAttributes, PropsWithChildren } from 'react';

import TableRowStyled from './TableRow.styled';

const TableRow = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const countChildren = React.Children.count(children);

  return (
    <TableRowStyled fontWeight={countChildren === 1 ? 600 : 400} {...props}>
      {children}
    </TableRowStyled>
  );
};

export default TableRow;
