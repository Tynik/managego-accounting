import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { SolidArrowIcon } from '~/icons';
import { SearchInput } from '~/components';

import SelectStyled, { SelectStyledProps } from './Select.styled';

type SelectProps = {
  action: string;
  options: string[];
  multiple?: boolean;
  search?: boolean;
} & Pick<SelectStyledProps, 'fullWidth'> &
  InputHTMLAttributes<never>;

const Select = ({
  action,
  options,
  placeholder,
  fullWidth,
  multiple,
  search,
  ...props
}: SelectProps) => {
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

    if (!isOpened) {
      dropdownRef.current.style.bottom = `-${dropdownRef.current.clientHeight}px`;
    }
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
      <div
        ref={dropdownRef}
        className="dropdown"
        onClick={onOptionsClickHandler}
        aria-expanded={isOpened}
        aria-label={action}
      >
        <div className="action">{action}</div>

        {search && <SearchInput placeholder="Search" />}

        <div className="divider" />

        <div className={clsx('options', { multiple })} role="list">
          {options.map(option => (
            <div
              key={option}
              className="option"
              title={option}
              data-option={option}
              role="listitem"
            >
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
