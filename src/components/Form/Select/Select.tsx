import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { SolidArrowIcon } from '~/icons';

import SelectStyled, { SelectStyledProps } from './Select.styled';

type SelectProps = {
  action: string;
  options: string[];
} & Pick<SelectStyledProps, 'fullWidth'> &
  InputHTMLAttributes<never>;

const Select = ({ action, options, placeholder, fullWidth, ...props }: SelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(null);

  const dropdownRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!isOpened) {
      return () => {};
    }
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dropdownRef, isOpened]);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsOpened(!isOpened);
  };

  const onOptionsClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    // setValue()
  };

  return (
    <SelectStyled isOpened={isOpened} onClick={onClickHandler} fullWidth={fullWidth}>
      <span className="placeholder">{placeholder}</span>
      <SolidArrowIcon className="arrow" rotate={isOpened ? 270 : 90} />
      <input {...props} />

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div ref={dropdownRef} className="dropdown" onClick={onOptionsClickHandler}>
        <div className="action">{action}</div>

        <div className="options">
          {options.map(option => (
            <div key={option} className="option" data-option={option}>
              {option}
            </div>
          ))}

          {!options.length && <div className="empty">No Options</div>}
        </div>
      </div>
    </SelectStyled>
  );
};

export default Select;
