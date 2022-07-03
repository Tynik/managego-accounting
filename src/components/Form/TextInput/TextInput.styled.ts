import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type TextInputStyledProps = {
  error?: string | boolean;
};

const TextInputStyled = styled.div<TextInputStyledProps>`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.188rem;

  > input {
    border: none;
    border-bottom: 1px solid #e8e8e8;
    background-color: #f1f1f126;
    border-radius: 0;

    margin-top: 1.75rem;
    padding: 0.25rem 0.625rem;

    color: #4a5354;
    font-size: 0.875rem;

    ${({ error }) =>
      error &&
      css`
        color: #e53935;
        border-color: #e53935;
        background-color: #e539351a;
      `}
  }

  > .error {
    color: #e53935;
    font-size: 0.625rem;
    padding: 0 0.625rem;
  }
`;

export default TextInputStyled;
