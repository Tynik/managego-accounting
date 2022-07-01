import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sizes: Record<ButtonStyledProps['size'], string> = {
  small: '5.625rem',
  medium: '9.188rem',
  large: '16.375rem',
};

export type ButtonStyledProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'filled' | 'outlined';
  disabled?: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ size }) => sizes[size || 'medium']};
  padding: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme, disabled = false, variant = 'filled', color = 'primary' }) =>
    css`
      ${theme[color].button[variant].borderColor
        ? css`
            border: 1px solid
              ${(disabled && theme[color].button[variant].disabled?.borderColor) ||
              theme[color].button[variant].borderColor};
          `
        : css`
            border: none;
          `};

      color: ${disabled
        ? theme[color].button[variant].disabled.color
        : theme[color].button[variant].color};

      background-color: ${disabled
        ? theme[color].button[variant].disabled.backgroundColor
        : theme[color].button[variant].backgroundColor};

      transition: background-color 0.3s ease-out;

      ${disabled &&
      css`
        cursor: not-allowed;
      `}

      ${!disabled &&
      css`
        cursor: pointer;

        &:hover {
          background-color: ${theme[color].button[variant].hover.backgroundColor};
        }
        &:active {
          background-color: ${theme[color].button[variant].active.backgroundColor};
        }
      `}
    `}
`;

export default ButtonStyled;
