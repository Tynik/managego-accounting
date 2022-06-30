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
  isOpened,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuItemStyled isOpened={isOpened} {...props}>
      <div>
        {icon}
        <h4>{label}</h4>
      </div>
      <div>
        {React.Children.map(children, (child: React.ReactElement<MenuSubItemStyledProps>) =>
          React.cloneElement(child, { isOpened })
        )}
      </div>
    </MenuItemStyled>
  );
};

export default MenuItem;
