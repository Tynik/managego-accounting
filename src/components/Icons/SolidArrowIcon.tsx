import React, { HTMLAttributes } from 'react';

import IconStyled, { IconStyledProps } from '~/components/Icons/Icon.styled';
import SolidArrow from '~/assets/solid-arrow-right.svg';

const SolidArrowIcon = (props: IconStyledProps & HTMLAttributes<any>) => {
  return (
    <IconStyled className="icon" {...props}>
      <SolidArrow />
    </IconStyled>
  );
};

export default SolidArrowIcon;
