import React, { PropsWithChildren, useContext } from 'react';

import { MenuContext, IconButton, MenuTitle } from '~/components';
import { AppsIcon, ArrowsIcon } from '~/icons';

import MenuStyled from './Menu.styled';

type MenuProps = {
  title: string;
};

const Menu = ({ children, title }: PropsWithChildren<MenuProps>) => {
  const { isMenuOpened, toggleMenu } = useContext(MenuContext);

  return (
    <MenuStyled isOpened={isMenuOpened} aria-hidden={!isMenuOpened}>
      <MenuTitle icon={<AppsIcon />}>
        <h4>{title}</h4>

        <IconButton onClick={toggleMenu} backgroundColor="#3e7694">
          <ArrowsIcon rotate={isMenuOpened ? 0 : 180} size="large" />
        </IconButton>
      </MenuTitle>

      {children}
    </MenuStyled>
  );
};

export default Menu;
