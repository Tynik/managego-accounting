import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

import CheckboxStyled from './Checkbox.styled';

type CheckboxProps = {
  label: string;
} & InputHTMLAttributes<never>;

const Checkbox = ({ children, label, ...props }: PropsWithChildren<CheckboxProps>) => {
  return (
    <CheckboxStyled {...props}>
      <input type="checkbox" />
      <span className="label">{label}</span>
    </CheckboxStyled>
  );
};

export default Checkbox;
