import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { IconButton, MenuTitle } from '~/components';
import { AppsIcon, ArrowsIcon } from '~/icons';

import MenuStyled from './Menu.styled';

type MenuProps = {
  title: string;
};

export const MenuContext = createContext<{ isMenuOpened: boolean }>({
  isMenuOpened: false,
});

const Menu = ({ children, title }: PropsWithChildren<MenuProps>) => {
  const [isOpened, setIsOpened] = useState(true);

  const menuContextValue = useMemo(() => ({ isMenuOpened: isOpened }), [isOpened]);

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuStyled isOpened={isOpened} aria-hidden={!isOpened}>
        <MenuTitle icon={<AppsIcon />}>
          <h4>{title}</h4>

          <IconButton onClick={() => setIsOpened(!isOpened)}>
            <ArrowsIcon rotate={isOpened ? 0 : 180} size="large" />
          </IconButton>
        </MenuTitle>

        {children}
      </MenuStyled>
    </MenuContext.Provider>
  );
};

export default Menu;
