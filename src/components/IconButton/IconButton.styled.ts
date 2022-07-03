import styled from '@emotion/styled';

type IconButtonStyledProps = {
  backgroundColor?: string;
};

const IconButtonStyled = styled.div<IconButtonStyledProps>`
  cursor: pointer;
  border-radius: 0.75rem;
  padding: 0.25rem;

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor || '#f8f8f8'};
  }

  &:active {
    fill: #488b8f;
    background-color: #c9eae2;
  }
`;

export default IconButtonStyled;
