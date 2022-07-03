import React, { createContext, HTMLAttributes, PropsWithChildren, useMemo, useState } from 'react';

export const MenuContext = createContext<{
  isMenuOpened: boolean;
  toggleMenu: () => void;
}>({
  isMenuOpened: false,
  toggleMenu: () => {},
});

const MenuWrapper = ({ children }: PropsWithChildren<HTMLAttributes<never>>) => {
  const [isOpened, setIsOpened] = useState(true);

  const menuContextValue = useMemo(
    () => ({
      isMenuOpened: isOpened,
      toggleMenu: () => setIsOpened(!isOpened),
    }),
    [isOpened]
  );

  return <MenuContext.Provider value={menuContextValue}>{children}</MenuContext.Provider>;
};

export default MenuWrapper;
