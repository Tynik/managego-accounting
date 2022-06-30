import styled from '@emotion/styled';

export type IconStyledProps = {
  rotate?: number;
  size?: 'small' | 'medium' | 'large';
};

const sizes: Record<IconStyledProps['size'], string> = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

const IconStyled = styled.div<IconStyledProps>`
  width: ${({ size }) => sizes[size || 'medium']};
  height: ${({ size }) => sizes[size || 'medium']};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : '')};
`;

export default IconStyled;
