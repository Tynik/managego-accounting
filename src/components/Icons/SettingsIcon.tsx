import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import Settings from '~/assets/settings.svg';

const SettingsIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Settings />
    </IconStyled>
  );
};

export default SettingsIcon;
