import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import Reports from '~/assets/reports.svg';

const ReportsIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Reports />
    </IconStyled>
  );
};

export default ReportsIcon;
