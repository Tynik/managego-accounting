import React, { HTMLAttributes, PropsWithChildren, ReactElement, useState } from 'react';

import { SolidArrowIcon } from '~/components/Icons';
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
  isMenuOpened,
  ...props
}: PropsWithChildren<MenuSubItemProps>) => {
  const [isSubItemOpened, setIsSubItemOpened] = useState(true);

  return (
    <MenuSubItemStyled
      isMenuOpened={isMenuOpened}
      isSubItemOpened={isSubItemOpened}
      areWithItems={Boolean(children)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="item" onClick={() => setIsSubItemOpened(!isSubItemOpened)}>
        <SolidArrowIcon />
        <div>
          {React.cloneElement(icon, { style: { width: '24px', height: '24px' } })}
          <h5>{label}</h5>
        </div>
      </div>
      <div className="list">{children}</div>
    </MenuSubItemStyled>
  );
};

export default MenuSubItem;
