import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import MenuItemStyled, { MenuItemStyledProps } from './MenuItem.styled';
import { MenuSubItemStyledProps } from '~/components/Menu/MenuSubItem/MenuSubItem.styled';

type MenuItemProps = {
  icon: ReactElement;
  label: string;
} & Partial<MenuItemStyledProps> &
  HTMLAttributes<any>;

const MenuItem = ({
  children,
  icon,
  label,
  isMenuOpened,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <MenuItemStyled isMenuOpened={isMenuOpened} {...props}>
      <div className="item">
        {icon}
        <h4>{label}</h4>
      </div>
      <div className="list">
        {React.Children.map(children, (child: React.ReactElement<MenuSubItemStyledProps>) =>
          React.cloneElement(child, { isMenuOpened })
        )}
      </div>
    </MenuItemStyled>
  );
};

export default MenuItem;
