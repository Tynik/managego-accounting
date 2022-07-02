import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { ButtonColor, ButtonVariant } from '~/emotion';

const sizes: Record<ButtonStyledProps['size'], string> = {
  small: '5.625rem',
  medium: '9.188rem',
  large: '16.375rem',
};

export type ButtonStyledProps = {
  size?: 'small' | 'medium' | 'large';
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
} & ButtonHTMLAttributes<any>;

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ size }) => sizes[size || 'medium']};
  padding: 0.5rem;

  border-radius: 0.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ variant }) =>
    variant === 'text'
      ? css`
          font-weight: 400;
          font-size: 0.75rem;
        `
      : css`
          font-weight: 500;
          font-size: 0.875rem;
        `}

  ${({ theme, disabled = false, variant = 'filled', color = 'success' }) =>
    css`
      ${theme.button[color][variant].borderColor
        ? css`
            border: 1px solid
              ${(disabled && theme.button[color][variant].disabled?.borderColor) ||
              theme.button[color][variant].borderColor};
          `
        : css`
            border: none;
          `};

      color: ${disabled
        ? theme.button[color][variant].disabled.color
        : theme.button[color][variant].color};

      background-color: ${(disabled
        ? theme.button[color][variant].disabled.backgroundColor
        : theme.button[color][variant].backgroundColor) || 'transparent'};

      transition: background-color 0.3s ease-out;

      ${disabled &&
      css`
        cursor: not-allowed;
      `}

      ${!disabled &&
      css`
        cursor: pointer;

        &:hover {
          background-color: ${theme.button[color][variant].hover?.backgroundColor || 'transparent'};
        }
        &:active {
          ${theme.button[color][variant].active?.borderColor &&
          css`
            border-color: ${theme.button[color][variant].active.borderColor};
          `};

          background-color: ${theme.button[color][variant].active?.backgroundColor ||
          'transparent'};
        }
      `}
    `}
`;

export default ButtonStyled;
