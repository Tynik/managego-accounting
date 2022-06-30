import React, { PropsWithChildren, useState } from 'react';

import type { MenuItemStyledProps } from '~/components/Menu/MenuItem/MenuItem.styled';

import { IconButton } from '~/components/IconButton';
import { AppsIcon, ArrowsIcon } from '~/components/Icons';
import { MenuTitle } from '~/components/Menu';

import MenuStyled from './Menu.styled';

type MenuProps = {
  title: string;
};

const Menu = ({ children, title }: PropsWithChildren<MenuProps>) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <MenuStyled isOpened={isOpened} aria-hidden={!isOpened}>
      <MenuTitle isOpened={isOpened} icon={<AppsIcon />}>
        <h4>{title}</h4>

        <IconButton onClick={() => setIsOpened(!isOpened)}>
          <ArrowsIcon rotate={isOpened ? 0 : 180} size="large" />
        </IconButton>
      </MenuTitle>

      {React.Children.map(children, (child: React.ReactElement<MenuItemStyledProps>) =>
        React.cloneElement(child, { isMenuOpened: isOpened })
      )}
    </MenuStyled>
  );
};

export default Menu;
