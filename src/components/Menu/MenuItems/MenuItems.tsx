import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import { MenuContext } from '~/components/Menu';

import MenuItemsStyled from './MenuItems.styled';

const MenuItems = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuItemsStyled isOpened={isMenuOpened} {...props}>
      {children}
    </MenuItemsStyled>
  );
};

export default MenuItems;
