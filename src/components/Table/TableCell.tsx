import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import TableCellStyled, { TableCellStyledProps } from '~/components/Table/TableCell.styled';
import { TableHeadContext } from '~/components/Table/TableHead';

type TableCellProps = TableCellStyledProps & HTMLAttributes<any>;

const TableCell = ({ children, ...props }: PropsWithChildren<TableCellProps>) => {
  const isHead = useContext(TableHeadContext);

  return (
    <TableCellStyled as={isHead ? 'th' : 'td'} {...props}>
      {children}
    </TableCellStyled>
  );
};

export default TableCell;
