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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuItemStyled isMenuOpened={isMenuOpened} {...props}>
      <div>
        {React.cloneElement(icon, { style: { width: '24px', height: '24px' } })}
        <h4>{label}</h4>
      </div>
      <div>
        {React.Children.map(children, (child: React.ReactElement<MenuSubItemStyledProps>) =>
          React.cloneElement(child, { isMenuOpened })
        )}
      </div>
    </MenuItemStyled>
  );
};

export default MenuItem;
