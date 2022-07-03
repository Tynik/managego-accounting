import React from 'react';

import Bank from '~/assets/bank.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const BankIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Bank />
    </IconStyled>
  );
};

export default BankIcon;
