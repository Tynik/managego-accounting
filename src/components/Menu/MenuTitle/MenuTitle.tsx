import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import MenuTitleStyled, { MenuTitleStyledProps } from './MenuTitle.styled';

const MenuTitle = ({
  children,
  icon,
  isOpened,
  ...props
}: PropsWithChildren<
  {
    icon: ReactElement;
  } & Partial<MenuTitleStyledProps> &
    HTMLAttributes<any>
>) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuTitleStyled isOpened={isOpened} {...props}>
      {React.cloneElement(icon, { style: { width: '24px', height: '24px' } })}
      <div>{children}</div>
    </MenuTitleStyled>
  );
};

export default MenuTitle;
