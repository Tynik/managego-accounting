import React, { PropsWithChildren, useState } from 'react';

import { IconButton } from '~/components/IconButton';
import { AppsIcon, ArrowsIcon } from '~/components/Icons';
import { MenuTitle } from '~/components/Menu';

import MenuStyled from './Menu.styled';

type MenuProps = {
  title: string;
};

const Menu = ({ children, title }: PropsWithChildren<MenuProps>) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <MenuStyled open={isOpened} aria-hidden={!isOpened}>
      <MenuTitle isOpened={isOpened} icon={<AppsIcon />}>
        <h4>{title}</h4>

        <IconButton onClick={() => setIsOpened(!isOpened)}>
          <ArrowsIcon rotate={!isOpened} />
        </IconButton>
      </MenuTitle>

      {React.Children.map(children, (child: React.ReactElement<any>) =>
        React.cloneElement(child, { isOpened })
      )}
    </MenuStyled>
  );
};

export default Menu;
