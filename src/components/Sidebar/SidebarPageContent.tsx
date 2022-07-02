import React, { PropsWithChildren, useContext } from 'react';

import type { ContentProps } from '~/components/Content';

import { Content, SIDEBAR_BAR_WIDTH, SidebarContext } from '~/components';

const SidebarPageContent = ({ children, ...props }: PropsWithChildren<ContentProps>) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return (
    <Content width={isSidebarOpened ? `calc(100% - ${SIDEBAR_BAR_WIDTH})` : '100%'} {...props}>
      {children}
    </Content>
  );
};

export default SidebarPageContent;
