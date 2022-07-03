import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import { BellIcon, BurgerMenu } from '~/icons';
import { MenuContext, Avatar, IconButton, SearchInput } from '~/components';

import TopBarStyled from './TopBar.styled';

const TopBar = ({ children, title, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <TopBarStyled {...props}>
      <IconButton id="burger-btn" onClick={toggleMenu}>
        <BurgerMenu size="small" />
      </IconButton>

      <h1>{title}</h1>

      <SearchInput placeholder="Search" extendable />

      <IconButton>
        <BellIcon />
      </IconButton>

      <Avatar alt="MA" />
    </TopBarStyled>
  );
};

export default TopBar;
