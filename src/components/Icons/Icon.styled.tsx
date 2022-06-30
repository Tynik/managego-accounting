import styled from '@emotion/styled';

export type IconStyledProps = {
  rotate?: number;
};

const IconStyled = styled.div<IconStyledProps>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : '')};
`;

export default IconStyled;
