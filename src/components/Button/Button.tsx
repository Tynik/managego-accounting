import React, { PropsWithChildren } from 'react';

import ButtonStyled, { ButtonStyledProps } from './Button.styled';

const Button = ({ children, ...props }: PropsWithChildren<ButtonStyledProps>) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
