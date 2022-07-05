import React from 'react';

import Minus from '~/assets/minus.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const MinusIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Minus />
    </IconStyled>
  );
};

export default MinusIcon;
