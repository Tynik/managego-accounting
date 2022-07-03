import React, { createContext, HTMLAttributes, PropsWithChildren, useMemo, useState } from 'react';

import { useScreenView } from '~/hooks';

import SidebarWrapperStyled from './SidebarWrapper.styled';

type SidebarContextProps = {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarWrapperContext = createContext<SidebarContextProps>({
  isSidebarOpened: null,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

const SidebarWrapper = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  const [isOpened, setIsOpened] = useState(false);

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
    <SidebarWrapperStyled ref={contentRef} {...props}>
      <SidebarWrapperContext.Provider value={contextValue}>
        {children}
      </SidebarWrapperContext.Provider>
    </SidebarWrapperStyled>
  );
};

export default SidebarWrapper;
