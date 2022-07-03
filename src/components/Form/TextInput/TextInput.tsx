import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

import { ClearIcon } from '~/icons';

import TextInputStyled, { TextInputStyledProps } from './TextInput.styled';

type TextInputProps = PropsWithChildren<TextInputStyledProps & InputHTMLAttributes<never>>;

const TextInput = ({ error, fullWidth, clearable, ...props }: TextInputProps) => {
  return (
    <TextInputStyled error={error} fullWidth={fullWidth} clearable={clearable}>
      <input {...props} />

      {clearable !== false && props.value && <ClearIcon className="clear" />}

      {typeof error === 'string' && <span className="error">{error}</span>}
    </TextInputStyled>
  );
};

export default TextInput;
