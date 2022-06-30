import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Bank from '~/assets/bank.svg';

const BankIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Bank />
    </IconStyled>
  );
};

export default BankIcon;
