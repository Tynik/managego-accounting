import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Dashboard from '~/assets/dashboard.svg';

const DashboardIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Dashboard />
    </IconStyled>
  );
};

export default DashboardIcon;
