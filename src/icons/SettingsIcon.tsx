import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Settings from '~/assets/settings.svg';

const SettingsIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Settings />
    </IconStyled>
  );
};

export default SettingsIcon;
