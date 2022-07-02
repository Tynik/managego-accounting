import React, { PropsWithChildren, useContext } from 'react';

import { Button, SidebarActions, SidebarContext } from '~/components';

import SidebarStyled from './Sidebar.styled';

type SidebarProps = {
  title: string;
};

const Sidebar = ({ children, title }: PropsWithChildren<SidebarProps>) => {
  const { isSidebarOpened, closeSidebar } = useContext(SidebarContext);

  return (
    <SidebarStyled isSidebarOpened={isSidebarOpened}>
      <h2>{title}</h2>

      <div className="content">{children}</div>

      <SidebarActions>
        <Button size="small">Save</Button>
        <Button onClick={closeSidebar} variant="outlined" size="small">
          Cancel
        </Button>
      </SidebarActions>
    </SidebarStyled>
  );
};

export default Sidebar;
