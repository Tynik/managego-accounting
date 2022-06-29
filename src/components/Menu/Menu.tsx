import React, { PropsWithChildren, useState } from 'react';

import { IconButton } from '~/components/IconButton';
import AppsIcon from '~/components/Icons/AppsIcon';
import ArrowIcon from '~/components/Icons/ArrowIcon';
import MenuItem from '~/components/Menu/MenuItem';
import MenuStyled from './Menu.styled';

const Menu = ({ children }: PropsWithChildren) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <MenuStyled open={isOpened} aria-hidden={!isOpened}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MenuItem
          isOpened={isOpened}
          icon={<AppsIcon />}
          style={{ fontWeight: 600 }}
          hideIconWhenClosed
        >
          Accounting
        </MenuItem>

        <IconButton onClick={() => setIsOpened(!isOpened)}>
          <ArrowIcon rotate={!isOpened} />
        </IconButton>
      </div>

      {React.Children.map(children, (child: React.ReactElement<any>) =>
        React.cloneElement(child, { isOpened })
      )}
    </MenuStyled>
  );
};

export default Menu;
