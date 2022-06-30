import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import Dashboard from '~/assets/dashboard.svg';

const DashboardIcon = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <IconStyled {...props}>
      <Dashboard />
    </IconStyled>
  );
};

export default DashboardIcon;
