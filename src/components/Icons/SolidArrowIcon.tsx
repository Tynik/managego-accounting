import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import SolidArrow from '~/assets/solid-arrow-right.svg';

const SolidArrowIcon = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <IconStyled className="icon" {...props}>
      <SolidArrow />
    </IconStyled>
  );
};

export default SolidArrowIcon;
