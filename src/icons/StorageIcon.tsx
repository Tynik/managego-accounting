import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Storage from '~/assets/storage.svg';

const StorageIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Storage />
    </IconStyled>
  );
};

export default StorageIcon;
