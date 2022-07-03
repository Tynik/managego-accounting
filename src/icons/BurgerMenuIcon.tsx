import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import BurgerMenu from '~/assets/burger-menu.svg';

const BurgerMenuIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <BurgerMenu />
    </IconStyled>
  );
};

export default BurgerMenuIcon;
