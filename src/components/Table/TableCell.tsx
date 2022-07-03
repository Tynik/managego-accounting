import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import { TableHeadContext } from '~/components/Table/TableHead';

import type { TableCellStyledProps } from './TableCell.styled';

import TableCellStyled from './TableCell.styled';

type TableCellProps = TableCellStyledProps & HTMLAttributes<never>;

const TableCell = ({ children, ...props }: PropsWithChildren<TableCellProps>) => {
  const isHead = useContext(TableHeadContext);

  return (
    <TableCellStyled as={isHead ? 'th' : 'td'} {...props}>
      {children}
    </TableCellStyled>
  );
};

export default TableCell;
