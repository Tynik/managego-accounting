import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import ArrowsLeft from '~/assets/arrows-left.svg';

const ArrowsIcon = ({ rotate, ...props }: { rotate?: boolean }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <IconStyled rotate={rotate} {...props}>
      <ArrowsLeft />
    </IconStyled>
  );
};

export default ArrowsIcon;
