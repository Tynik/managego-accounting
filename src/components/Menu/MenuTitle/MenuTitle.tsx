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
    <MenuTitleStyled isOpened={isOpened} {...props}>
      {icon}
      <div className="content">{children}</div>
    </MenuTitleStyled>
  );
};

export default MenuTitle;
