import React from 'react';

import Dashboard from '~/assets/dashboard.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const DashboardIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Dashboard />
    </IconStyled>
  );
};

export default DashboardIcon;
