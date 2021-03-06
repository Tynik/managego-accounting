import React from 'react';

import Building from '~/assets/building.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const BuildingIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Building />
    </IconStyled>
  );
};

export default BuildingIcon;
