import React, { PropsWithChildren } from 'react';

import CheckboxStyled from './Checkbox.styled';

const Checkbox = ({ children, label, ...props }: PropsWithChildren<any>) => {
  return (
    <CheckboxStyled {...props}>
      <input type="checkbox" />
      <span className="label">{label}</span>
    </CheckboxStyled>
  );
};

export default Checkbox;
