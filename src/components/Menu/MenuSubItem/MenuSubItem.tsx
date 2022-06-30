import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import MenuSubItemStyled, { MenuSubItemStyledProps } from './MenuSubItem.styled';

type MenuSubItemProps = {
  icon: ReactElement;
  label: string;
} & Partial<MenuSubItemStyledProps> &
  HTMLAttributes<any>;

const MenuSubItem = ({
  children,
  icon,
  label,
  isOpened,
  ...props
}: PropsWithChildren<MenuSubItemProps>) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuSubItemStyled isOpened={isOpened} {...props}>
      <div>
        {React.cloneElement(icon, { style: { width: '24px', height: '24px' } })}
        <h5>{label}</h5>
      </div>
      <div>
        {React.Children.map(children, (child: React.ReactElement<MenuSubItemStyledProps>) =>
          React.cloneElement(child, { isOpened })
        )}
      </div>
    </MenuSubItemStyled>
  );
};

export default MenuSubItem;
