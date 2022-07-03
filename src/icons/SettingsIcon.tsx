import React from 'react';

import Settings from '~/assets/settings.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const SettingsIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Settings />
    </IconStyled>
  );
};

export default SettingsIcon;
