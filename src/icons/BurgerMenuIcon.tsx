import React from 'react';

import BurgerMenu from '~/assets/burger-menu.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const BurgerMenuIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <BurgerMenu />
    </IconStyled>
  );
};

export default BurgerMenuIcon;
