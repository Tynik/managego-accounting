import React, { PropsWithChildren, useContext } from 'react';

import { MenuContext } from '~/components/Menu/Menu';

import MenuItemsStyled from './MenuItems.styled';

const MenuItems = ({ children, ...props }: PropsWithChildren<any>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuItemsStyled isOpened={isMenuOpened} {...props}>
      {children}
    </MenuItemsStyled>
  );
};

export default MenuItems;
