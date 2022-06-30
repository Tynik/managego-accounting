import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import Dollar from '~/assets/dollar.svg';

const DollarIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Dollar />
    </IconStyled>
  );
};

export default DollarIcon;
