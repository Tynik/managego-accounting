import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

const TableRowStyled = styled.tr<CSSProperties>`
  ${({ fontWeight }) =>
    css`
      font-weight: ${fontWeight};
    `}
`;

export default TableRowStyled;
