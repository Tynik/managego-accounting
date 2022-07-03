import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import { MenuContext } from '~/components/Menu';

import MenuFooterStyled from './MenuFooter.styled';

const MenuFooter = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuFooterStyled isOpened={isMenuOpened} {...props}>
      {children}
    </MenuFooterStyled>
  );
};

export default MenuFooter;
