import React, {
  cloneElement,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react';

import { SolidArrowIcon } from '~/icons';
import { MenuContext } from '~/components/Menu';

import MenuSecondItemStyled from './MenuSecondItem.styled';

type MenuSecondItemProps = {
  icon: ReactElement;
  label: string;
  component?: ReactElement;
  active?: boolean;
} & HTMLAttributes<never>;

const MenuSecondItem = ({
  children,
  icon,
  label,
  component,
  ...props
}: PropsWithChildren<MenuSecondItemProps>) => {
  const { isMenuOpened } = useContext(MenuContext);

  const [isSubItemOpened, setIsSubItemOpened] = useState(true);

  const onItemClickHandler = () => {
    if (children) {
      setIsSubItemOpened(!isSubItemOpened);
    }
  };

  const linkElement = useMemo(
    () =>
      cloneElement(component || <div />, {
        onClick: onItemClickHandler,
        title: label,
        className: 'item',
        children: (
          <>
            <SolidArrowIcon className="arrow" rotate={isSubItemOpened ? 90 : 0} />
            <div className="name">
              {icon}
              <h5>{label}</h5>
            </div>
          </>
        ),
      }),
    [isSubItemOpened]
  );

  return (
    <MenuSecondItemStyled
      isMenuOpened={isMenuOpened}
      isSubItemOpened={isSubItemOpened}
      areWithItems={Boolean(children)}
      {...props}
    >
      {linkElement}
      <div className="list">{children}</div>
    </MenuSecondItemStyled>
  );
};

export default MenuSecondItem;
