import React, { InputHTMLAttributes, PropsWithChildren, TextareaHTMLAttributes } from 'react';

import { ClearIcon } from '~/icons';

import TextInputStyled, { TextInputStyledProps } from './TextInput.styled';

type TextInputProps = PropsWithChildren<
  {
    multiline?: boolean;
  } & TextInputStyledProps &
    (InputHTMLAttributes<never> | TextareaHTMLAttributes<never>)
>;

const TextInput = ({
  error,
  fullWidth,
  multiline,
  clearable,
  required,
  ...props
}: TextInputProps) => {
  const extendedProps: InputHTMLAttributes<never> = {
    ...props,
    'aria-invalid': Boolean(error),
    'aria-required': required || false,
  };

  const component = multiline ? <textarea {...extendedProps} /> : <input {...extendedProps} />;

  return (
    <TextInputStyled error={error} fullWidth={fullWidth} clearable={clearable}>
      {component}

      {clearable !== false && props.value && <ClearIcon />}

      {typeof error === 'string' && (
        <span className="error" aria-live="assertive">
          {error}
        </span>
      )}
    </TextInputStyled>
  );
};

export default TextInput;
