import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import ArrowsLeft from '~/assets/arrows-left.svg';

const ArrowsIcon = ({ rotate }: { rotate?: boolean }) => {
  return (
    <IconStyled rotate={rotate}>
      <ArrowsLeft />
    </IconStyled>
  );
};

export default ArrowsIcon;
