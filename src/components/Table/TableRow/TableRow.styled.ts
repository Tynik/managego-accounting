import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TableRowStyled = styled.tr<CSSProperties>`
  ${({ fontWeight }) =>
    css`
      font-weight: ${fontWeight};
    `}
`;

export default TableRowStyled;
