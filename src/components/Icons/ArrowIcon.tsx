import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import ArrowLeft from '~/assets/arrow-left.svg';

const ArrowIcon = ({ rotate }: { rotate?: boolean }) => {
  return (
    <IconStyled rotate={rotate}>
      <ArrowLeft />
    </IconStyled>
  );
};

export default ArrowIcon;
