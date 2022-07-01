import React, { PropsWithChildren, useContext } from 'react';

import { SidebarContext } from '~/components/Sidebar/SidebarWrapper';

import SidebarStyled from './Sidebar.styled';

const Sidebar = ({ children }: PropsWithChildren<any>) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return <SidebarStyled isSidebarOpened={isSidebarOpened}>{children}</SidebarStyled>;
};

export default Sidebar;
