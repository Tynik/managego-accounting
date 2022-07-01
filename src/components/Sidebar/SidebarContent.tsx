import React, { PropsWithChildren, useContext } from 'react';

import type { ContentProps } from '~/components/Content';

import { Content } from '~/components';
import { SidebarContext } from '~/components/Sidebar/SidebarWrapper';
import { SIDEBAR_BAR_WIDTH } from '~/components/Sidebar/Sidebar.styled';

const SidebarContent = ({ children, ...props }: PropsWithChildren<ContentProps>) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return (
    <Content width={`calc(100% - ${isSidebarOpened ? SIDEBAR_BAR_WIDTH : 0})`} {...props}>
      {children}
    </Content>
  );
};

export default SidebarContent;
