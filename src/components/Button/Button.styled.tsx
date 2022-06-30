import styled from '@emotion/styled';

type ButtonStyledProps = {
  outlined?: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: #5ea3a3;
  border: 1px solid #5ea3a3;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default ButtonStyled;
