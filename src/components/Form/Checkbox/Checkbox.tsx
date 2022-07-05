import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { CheckIcon, MinusIcon } from '~/icons';

import CheckboxStyled from './Checkbox.styled';

type CheckboxProps = {
  label: string;
  indeterminate?: boolean;
} & InputHTMLAttributes<never>;

const Checkbox = ({ label, checked, indeterminate, ...props }: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>();

  // null as indeterminate value
  const [localChecked, setLocalChecked] = useState<boolean | null>(checked || false);

  useEffect(() => {
    inputRef.current.indeterminate = localChecked === null;
  }, [localChecked]);

  const onClickHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();

    if (checked === undefined) {
      if (indeterminate && localChecked) {
        setLocalChecked(null);
      } else {
        setLocalChecked(localChecked === null ? false : !localChecked);
      }
    }
  };

  return (
    <CheckboxStyled
      checked={Boolean(localChecked)}
      indeterminate={localChecked === null}
      onClick={onClickHandler}
    >
      <input
        ref={inputRef}
        checked={Boolean(localChecked)}
        type="checkbox"
        onChange={() => {}}
        {...props}
      />
      {localChecked === null ? <MinusIcon /> : <CheckIcon />}
      <span className="label">{label}</span>
    </CheckboxStyled>
  );
};

export default Checkbox;
