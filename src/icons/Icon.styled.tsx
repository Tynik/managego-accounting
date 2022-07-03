import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export type IconStyledProps = {
  rotate?: number;
  size?: 'small' | 'medium' | 'large';
} & HTMLAttributes<never>;

const sizes: Record<IconStyledProps['size'], string> = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

const IconStyled = styled.div<IconStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : '')};
  transition: all 0.3s ease-out;

  svg {
    width: ${({ size }) => sizes[size || 'medium']};
    height: ${({ size }) => sizes[size || 'medium']};
  }
`;

export default IconStyled;
