import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react';

import { SolidArrowIcon } from '~/icons';
import { MenuContext } from '~/components/Menu/Menu';

import MenuSubItemStyled from './MenuSubItem.styled';

type MenuSubItemProps = {
  icon: ReactElement;
  label: string;
  active?: boolean;
} & HTMLAttributes<any>;

const MenuSubItem = ({ children, icon, label, ...props }: PropsWithChildren<MenuSubItemProps>) => {
  const { isMenuOpened } = useContext(MenuContext);

  const [isSubItemOpened, setIsSubItemOpened] = useState(true);

  const onItemClickHandler = () => {
    if (children) {
      setIsSubItemOpened(!isSubItemOpened);
    }
  };

  return (
    <MenuSubItemStyled
      isMenuOpened={isMenuOpened}
      isSubItemOpened={isSubItemOpened}
      areWithItems={Boolean(children)}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="item" onClick={onItemClickHandler}>
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
