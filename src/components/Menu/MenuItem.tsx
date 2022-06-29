import React, { HTMLAttributes, PropsWithChildren } from 'react';

import MenuItemStyled from './MenuItem.styled';

const MenuItem = ({
  children,
  icon,
  isOpened,
  hideIconWhenClosed,
  ...props
}: PropsWithChildren<
  { icon: any; isOpened?: boolean; hideIconWhenClosed?: boolean } & HTMLAttributes<any>
>) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MenuItemStyled isOpened={isOpened} hideIconWhenClosed={hideIconWhenClosed} {...props}>
      {icon}
      <div>{children}</div>
    </MenuItemStyled>
  );
};

export default MenuItem;
