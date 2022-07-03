import React from 'react';

import Storage from '~/assets/storage.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const StorageIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Storage />
    </IconStyled>
  );
};

export default StorageIcon;
