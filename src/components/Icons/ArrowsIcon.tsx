import React from 'react';

import IconStyled, { IconStyledProps } from '~/components/Icons/Icon.styled';
import ArrowsLeft from '~/assets/arrows-left.svg';

const ArrowsIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <ArrowsLeft />
    </IconStyled>
  );
};

export default ArrowsIcon;
