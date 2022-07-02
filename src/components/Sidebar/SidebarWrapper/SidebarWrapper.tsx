import React, { createContext, PropsWithChildren, useMemo, useRef, useState } from 'react';

import { useScreenView } from '~/hooks';

import SidebarWrapperStyled from './SidebarWrapper.styled';

type SidebarContextProps = {
  isSidebarOpened: boolean;
  sidebarRef: React.MutableRefObject<HTMLElement>;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setSidebarRef: (ref: HTMLElement) => void;
};

export const SidebarWrapperContext = createContext<SidebarContextProps>({
  isSidebarOpened: null,
  sidebarRef: null,
  toggleSidebar: () => {},
  closeSidebar: () => {},
  setSidebarRef: () => {},
});

const SidebarWrapper = ({ children, ...props }: PropsWithChildren<any>) => {
  const [isOpened, setIsOpened] = useState(true);
  const sidebarRef = useRef<HTMLElement>(null);

  const contentRef = useScreenView();

  const contextValue = useMemo(
    () => ({
      sidebarRef,
      isSidebarOpened: isOpened,
      toggleSidebar: () => setIsOpened(!isOpened),
      closeSidebar: () => setIsOpened(false),
      setSidebarRef: (ref: HTMLElement) => {
        sidebarRef.current = ref;
      },
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
