import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { Avatar } from '~/components/Avatar';
import TopBarStyled from '~/components/TopBar/TopBar.styled';

const SearchStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.primary.color.border};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
`;

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
