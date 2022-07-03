import React from 'react';

import Reports from '~/assets/reports.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const ReportsIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Reports />
    </IconStyled>
  );
};

export default ReportsIcon;
