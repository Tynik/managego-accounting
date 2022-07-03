import React from 'react';

import Dollar from '~/assets/dollar.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const DollarIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Dollar />
    </IconStyled>
  );
};

export default DollarIcon;
