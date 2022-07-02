import React, { PropsWithChildren, useContext } from 'react';

import { MenuContext } from '~/components/Menu/Menu';

import MenuFooterStyled from './MenuFooter.styled';

const MenuFooter = ({ children, ...props }: PropsWithChildren<any>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuFooterStyled isOpened={isMenuOpened} {...props}>
      {children}
    </MenuFooterStyled>
  );
};

export default MenuFooter;
