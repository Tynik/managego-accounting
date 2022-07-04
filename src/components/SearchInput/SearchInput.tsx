import React, { InputHTMLAttributes, useRef } from 'react';

import { SearchIcon } from '~/icons';

import SearchInputStyled, { SearchInputStyledProps } from './SearchInput.styled';

type SearchInputProps = SearchInputStyledProps & InputHTMLAttributes<never>;

const SearchInput = ({ extendable, ...props }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  const onSearchClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <SearchInputStyled className="search" extendable={extendable}>
      <SearchIcon onClick={onSearchClickHandler} aria-hidden />
      <input ref={inputRef} {...props} role="searchbox" spellCheck={false} />
    </SearchInputStyled>
  );
};

export default SearchInput;
