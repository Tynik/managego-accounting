import React, { InputHTMLAttributes, PropsWithChildren, useRef } from 'react';

import { SearchIcon } from '~/icons';

import SearchInputStyled from './SearchInput.styled';

const SearchInput = ({ children, ...props }: PropsWithChildren<InputHTMLAttributes<never>>) => {
  const inputRef = useRef<HTMLInputElement>();

  const onSearchClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <SearchInputStyled>
      <SearchIcon onClick={onSearchClickHandler} />
      <input ref={inputRef} {...props} />
    </SearchInputStyled>
  );
};

export default SearchInput;
