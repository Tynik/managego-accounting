import React from 'react';

import Download from '~/assets/download.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const DownloadIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Download />
    </IconStyled>
  );
};

export default DownloadIcon;
