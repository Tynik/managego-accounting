import styled from '@emotion/styled';

export type MenuFooterStyledProps = {
  isOpened: boolean;
};

const MenuFooterStyled = styled.footer<MenuFooterStyledProps>`
  background-color: #313b3d;
  padding: 0.875rem 1.5rem;
  font-size: 0.625rem;
  font-weight: 400;
  display: flex;
  gap: 0.5rem;
  white-space: nowrap;
  justify-content: center;
  color: #faf9f9;

  > * {
    opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
    transition: opacity 0.3s linear;
    cursor: pointer;
  }
`;

export default MenuFooterStyled;
