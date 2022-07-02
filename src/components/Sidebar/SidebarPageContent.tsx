import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';

import type { ContentProps } from '~/components/Content';

import { Content, SidebarWrapperContext } from '~/components';

const SidebarPageContent = ({ children, ...props }: PropsWithChildren<ContentProps>) => {
  const { isSidebarOpened, sidebarRef } = useContext(SidebarWrapperContext);

  const [contentWidth, setContentWidth] = useState<string>(null);

  useEffect(() => {
    const sidebarWidth = sidebarRef.current.getBoundingClientRect().width;

    setContentWidth(isSidebarOpened ? `calc(100% - ${sidebarWidth}px)` : '100%');
  }, [isSidebarOpened]);

  if (!contentWidth) {
    return null;
  }

  return (
    <Content width={contentWidth} {...props}>
      {children}
    </Content>
  );
};

export default SidebarPageContent;
