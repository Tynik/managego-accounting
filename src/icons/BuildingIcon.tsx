import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Building from '~/assets/building.svg';

const BuildingIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Building />
    </IconStyled>
  );
};

export default BuildingIcon;
