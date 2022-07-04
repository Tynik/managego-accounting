import React, { FormHTMLAttributes, PropsWithChildren } from 'react';

import FormStyled from './Form.styled';

type FormProps = {
  title?: string;
} & FormHTMLAttributes<never>;

const Form = ({ children, title, ...props }: PropsWithChildren<FormProps>) => {
  return (
    <FormStyled aria-label={title} {...props}>
      {title && <h4>{title}</h4>}
      <div className="items">{children}</div>
    </FormStyled>
  );
};

export default Form;
