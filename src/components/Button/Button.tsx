import React, { PropsWithChildren } from 'react';

import ButtonStyled from './Button.styled';

const Button = ({ children }: PropsWithChildren) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
