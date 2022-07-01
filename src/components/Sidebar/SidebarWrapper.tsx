import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';

import SidebarWrapperStyled from '~/components/Sidebar/SidebarWrapper.styled';

type SidebarContextProps = {
  isSidebarOpened: boolean;
  onToggleSidebar: () => void;
  onCloseSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpened: false,
  onToggleSidebar: () => {},
  onCloseSidebar: () => {},
});

const SidebarWrapper = ({ children, ...props }: PropsWithChildren<any>) => {
  const [isOpened, setIsOpened] = useState(false);

  const contextValue = useMemo(
    () => ({
      isSidebarOpened: isOpened,
      onToggleSidebar: () => setIsOpened(!isOpened),
      onCloseSidebar: () => setIsOpened(false),
    }),
    [isOpened]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <SidebarWrapperStyled {...props}>{children}</SidebarWrapperStyled>
    </SidebarContext.Provider>
  );
};

export default SidebarWrapper;
