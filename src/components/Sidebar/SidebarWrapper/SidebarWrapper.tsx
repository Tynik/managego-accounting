import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { useScreenView } from '~/hooks';

import SidebarWrapperStyled from './SidebarWrapper.styled';

type SidebarContextProps = {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpened: null,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

const SidebarWrapper = ({ children, ...props }: PropsWithChildren<any>) => {
  const [isOpened, setIsOpened] = useState(true);

  const contentRef = useScreenView();

  const contextValue = useMemo(
    () => ({
      isSidebarOpened: isOpened,
      toggleSidebar: () => setIsOpened(!isOpened),
      closeSidebar: () => setIsOpened(false),
    }),
    [isOpened]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <SidebarWrapperStyled ref={contentRef} {...props}>
        {children}
      </SidebarWrapperStyled>
    </SidebarContext.Provider>
  );
};

export default SidebarWrapper;
