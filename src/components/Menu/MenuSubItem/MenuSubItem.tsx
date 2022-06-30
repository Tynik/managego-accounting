import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react';

import { SolidArrowIcon } from '~/components/Icons';
import { MenuContext } from '~/components/Menu/Menu';

import MenuSubItemStyled from './MenuSubItem.styled';

type MenuSubItemProps = {
  icon: ReactElement;
  label: string;
} & HTMLAttributes<any>;

const MenuSubItem = ({ children, icon, label, ...props }: PropsWithChildren<MenuSubItemProps>) => {
  const [isSubItemOpened, setIsSubItemOpened] = useState(true);

  const { isMenuOpened } = useContext(MenuContext);

  return (
    <MenuSubItemStyled
      isMenuOpened={isMenuOpened}
      isSubItemOpened={isSubItemOpened}
      areWithItems={Boolean(children)}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="item" onClick={() => setIsSubItemOpened(!isSubItemOpened)}>
        <SolidArrowIcon className="arrow" rotate={isSubItemOpened ? 90 : 0} />
        <div className="name">
          {icon}
          <h5>{label}</h5>
        </div>
      </div>
      <div className="list">{children}</div>
    </MenuSubItemStyled>
  );
};

export default MenuSubItem;
