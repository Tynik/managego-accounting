import React from 'react';

import ArrowsLeft from '~/assets/arrows-left.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const ArrowsIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <ArrowsLeft />
    </IconStyled>
  );
};

export default ArrowsIcon;
