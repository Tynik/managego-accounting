import React, { HTMLAttributes, PropsWithChildren, ReactElement, useContext } from 'react';

import { MenuContext } from '~/components/Menu/Menu';
import MenuTitleStyled, { MenuTitleStyledProps } from './MenuTitle.styled';

type MenuTitleProps = {
  icon: ReactElement;
} & Partial<MenuTitleStyledProps> &
  HTMLAttributes<any>;

const MenuTitle = ({ children, icon, ...props }: PropsWithChildren<MenuTitleProps>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuTitleStyled isOpened={isMenuOpened} {...props}>
      {icon}
      <div className="content">{children}</div>
    </MenuTitleStyled>
  );
};

export default MenuTitle;
