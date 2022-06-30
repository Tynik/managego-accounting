import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Apps from '~/assets/apps.svg';

const AppsIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Apps />
    </IconStyled>
  );
};

export default AppsIcon;
