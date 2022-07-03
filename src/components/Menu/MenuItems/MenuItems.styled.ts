import styled from '@emotion/styled';

export type MenuItemsStyledProps = {
  isOpened: boolean;
};

const MenuItemsStyled = styled.div<MenuItemsStyledProps>`
  flex-grow: 1;
  overflow: hidden auto;
`;

export default MenuItemsStyled;
