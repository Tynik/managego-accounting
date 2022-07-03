import React from 'react';

import Bell from '~/assets/bell.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const BellIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Bell />
    </IconStyled>
  );
};

export default BellIcon;
