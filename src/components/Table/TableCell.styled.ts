import styled from 'styled-components';
import { CSSProperties } from 'react';

export type TableCellStyledProps = {
  level?: number;
} & CSSProperties;

const TableCellStyled = styled.div<TableCellStyledProps>`
  padding: 0.5rem calc(1rem * ${({ level }) => (level ? level + 1 : 1)}) 0.5rem;
  text-align: ${props => props.textAlign || 'left'};
  white-space: nowrap;
`;

export default TableCellStyled;
