import React from 'react';

import SolidArrow from '~/assets/solid-arrow-right.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const SolidArrowIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <SolidArrow />
    </IconStyled>
  );
};

export default SolidArrowIcon;
