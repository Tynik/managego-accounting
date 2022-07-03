import React from 'react';

import IconStyled, { IconStyledProps } from './Icon.styled';
import Apps from '~/assets/apps.svg';

const AppsIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Apps />
    </IconStyled>
  );
};

export default AppsIcon;
