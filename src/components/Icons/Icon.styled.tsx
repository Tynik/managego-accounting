import styled from '@emotion/styled';

const IconStyled = styled.div<{ rotate?: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  transform: ${({ rotate }) => (rotate ? `rotate(180deg)` : '')};
`;

export default IconStyled;
