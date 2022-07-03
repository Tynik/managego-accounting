import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { SolidArrowIcon } from '~/icons';

import SelectStyled, { SelectStyledProps } from './Select.styled';

type SelectProps = { options: string[] } & Pick<SelectStyledProps, 'fullWidth'> &
  InputHTMLAttributes<never>;

const Select = ({ options, placeholder, fullWidth, ...props }: SelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(null);

  const optionsRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!isOpened) {
      return;
    }
    const handleClickOutside = (e: any) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [optionsRef, isOpened]);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsOpened(!isOpened);
  };

  const onOptionsClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <SelectStyled isOpened={isOpened} onClick={onClickHandler} fullWidth={fullWidth}>
      <span className="placeholder">{placeholder}</span>
      <SolidArrowIcon className="arrow" rotate={isOpened ? 270 : 90} />
      <input {...props} />

      <div ref={optionsRef} className="options" onClick={onOptionsClickHandler}>
        {options.map(option => (
          <div key={option} className="option">
            {option}
          </div>
        ))}

        {!options.length && <div>No Options</div>}
      </div>
    </SelectStyled>
  );
};

export default Select;
