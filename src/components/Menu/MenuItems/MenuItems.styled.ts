import styled from '@emotion/styled';

export type MenuItemsStyledProps = {
  isOpened: boolean;
};

const MenuItemsStyled = styled.div<MenuItemsStyledProps>`
  flex-grow: 1;
`;

export default MenuItemsStyled;
