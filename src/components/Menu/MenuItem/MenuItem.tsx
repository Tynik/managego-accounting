import React, { HTMLAttributes, PropsWithChildren, ReactElement, useContext } from 'react';

import { MenuContext } from '~/components/Menu/Menu';

import MenuItemStyled from './MenuItem.styled';

type MenuItemProps = {
  icon: ReactElement;
  label: string;
} & HTMLAttributes<any>;

const MenuItem = ({ children, icon, label, ...props }: PropsWithChildren<MenuItemProps>) => {
  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuItemStyled isMenuOpened={isMenuOpened} {...props}>
      <div className="item">
        {icon}
        <h4>{label}</h4>
      </div>
      <div className="list">{children}</div>
    </MenuItemStyled>
  );
};

export default MenuItem;
