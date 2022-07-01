import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type ContentProps = {
  width?: string;
};

const Content = styled.section<ContentProps>`
  padding: 2rem 1.5rem;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export default Content;
