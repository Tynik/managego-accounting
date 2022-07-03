import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';

import { BurgerMenu } from '~/icons';
import { MenuContext, Avatar, IconButton } from '~/components';

import TopBarStyled from './TopBar.styled';
import SearchStyled from './Search.styled';

const TopBar = ({ children, title, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <TopBarStyled {...props}>
      <IconButton id="burger-btn" backgroundColor="#f8f8f8" onClick={toggleMenu}>
        <BurgerMenu />
      </IconButton>

      <h1>{title}</h1>

      <SearchStyled title="Type something" placeholder="Search" />

      <Avatar alt="MA" />
    </TopBarStyled>
  );
};

export default TopBar;
