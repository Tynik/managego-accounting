import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Bell from '~/assets/bell.svg';

const BellIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Bell />
    </IconStyled>
  );
};

export default BellIcon;
