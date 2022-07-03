import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

import TextInputStyled, { TextInputStyledProps } from './TextInput.styled';

type TextInputProps = PropsWithChildren<TextInputStyledProps & InputHTMLAttributes<never>>;

const TextInput = ({ error, fullWidth, ...props }: TextInputProps) => {
  return (
    <TextInputStyled error={error} fullWidth={fullWidth}>
      <input {...props} />
      {typeof error === 'string' && <span className="error">{error}</span>}
    </TextInputStyled>
  );
};

export default TextInput;
