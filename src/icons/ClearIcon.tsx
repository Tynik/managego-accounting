import React from 'react';

import Clear from '~/assets/clear.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const ClearIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="clear icon" {...props}>
      <Clear />
    </IconStyled>
  );
};

export default ClearIcon;
