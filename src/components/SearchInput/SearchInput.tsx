import React, { InputHTMLAttributes, PropsWithChildren, useRef } from 'react';

import { SearchIcon } from '~/icons';

import SearchInputStyled, { SearchInputStyledProps } from './SearchInput.styled';

type SearchInputProps = PropsWithChildren<SearchInputStyledProps & InputHTMLAttributes<never>>;

const SearchInput = ({ children, extendable, ...props }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  const onSearchClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <SearchInputStyled extendable={extendable}>
      <SearchIcon onClick={onSearchClickHandler} />
      <input ref={inputRef} {...props} />
    </SearchInputStyled>
  );
};

export default SearchInput;
