import React, { HTMLAttributes, PropsWithChildren } from 'react';

import { Avatar } from '~/components/Avatar';
import TopBarStyled from '~/components/TopBar/TopBar.styled';

import SearchStyled from './Search.styled';

const TopBar = ({ children, title, ...props }: PropsWithChildren<HTMLAttributes<any>>) => {
  return (
    <TopBarStyled {...props}>
      <h1>{title}</h1>

      <SearchStyled title="Type something" placeholder="Search" />

      <Avatar alt="MA" />
    </TopBarStyled>
  );
};

export default TopBar;
