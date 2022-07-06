import styled, { css } from 'styled-components';

type CheckboxStyledProps = {
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};

const CheckboxStyled = styled.label<CheckboxStyledProps>`
  display: flex;
  align-items: center;
  margin-top: 1.75rem;

  font-size: 0.875rem;
  color: #939598;
  font-weight: 400;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  > input {
    display: none;
  }

  > .icon {
    width: 1rem;
    height: 1rem;

    padding: 0.125rem;
    border-radius: 0.125rem;
    border: 1px solid ${({ disabled }) => (disabled ? '#e8e8e8' : '#939598')}

    transition: background-color 0.3s linear;

    ${({ checked, indeterminate, disabled }) =>
      checked || indeterminate
        ? css`
            border: 1px solid #939598;
            background-color: ${disabled ? '#e8e8e8' : '#5ea3a3'};
          `
        : css`
            border: 1px solid #939598;
            svg {
              opacity: 0;
            }
          `}

    ${({ disabled }) =>
      disabled &&
      css`
        border: 1px solid #e8e8e8;
      `}
  }

  > .label {
    margin-left: 0.375rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default CheckboxStyled;
