import React, { InputHTMLAttributes, PropsWithChildren, TextareaHTMLAttributes } from 'react';

import { ClearIcon } from '~/icons';

import TextInputStyled, { TextInputStyledProps } from './TextInput.styled';

type TextInputProps = PropsWithChildren<
  {
    multiline?: boolean;
  } & TextInputStyledProps &
    (InputHTMLAttributes<never> | TextareaHTMLAttributes<never>)
>;

const TextInput = ({ error, fullWidth, multiline, clearable, ...props }: TextInputProps) => {
  const component = multiline ? <textarea {...props} /> : <input {...props} />;

  return (
    <TextInputStyled error={error} fullWidth={fullWidth} clearable={clearable}>
      {component}

      {clearable !== false && props.value && <ClearIcon className="clear" />}

      {typeof error === 'string' && <span className="error">{error}</span>}
    </TextInputStyled>
  );
};

export default TextInput;
