import React from 'react';

import Check from '~/assets/check.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const CheckIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Check />
    </IconStyled>
  );
};

export default CheckIcon;
