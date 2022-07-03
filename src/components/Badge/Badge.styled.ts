import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type BadgeStyledProps = {
  vertical?: 'bottom' | 'top';
  horizontal?: 'right' | 'left';
};

const BadgeStyled = styled.div<BadgeStyledProps>`
  position: relative;

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: #e53935;

    ${({ vertical }) =>
      vertical === 'top'
        ? css`
            top: 0;
          `
        : css`
            bottom: 0;
          `}

    ${({ horizontal }) =>
      horizontal === 'left'
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `}
  }
`;

export default BadgeStyled;
