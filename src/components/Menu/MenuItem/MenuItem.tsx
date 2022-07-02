import React, {
  ReactElement,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  cloneElement,
  useMemo,
} from 'react';

import { MenuContext } from '~/components/Menu/Menu';

import MenuItemStyled from './MenuItem.styled';

type MenuItemProps = {
  icon: ReactElement;
  label: string;
  component: ReactElement;
  active?: boolean;
} & HTMLAttributes<any>;

const MenuItem = ({
  children,
  icon,
  label,
  component,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  const { isMenuOpened } = useContext(MenuContext);

  const linkElement = useMemo(
    () =>
      cloneElement(component, {
        title: label,
        className: 'item',
        children: (
          <>
            {icon}
            <h4>{label}</h4>
          </>
        ),
      }),
    []
  );

  return (
    <MenuItemStyled isMenuOpened={isMenuOpened} {...props}>
      {linkElement}
      <div className="list">{children}</div>
    </MenuItemStyled>
  );
};

export default MenuItem;
