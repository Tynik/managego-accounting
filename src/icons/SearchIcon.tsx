import React from 'react';

import Search from '~/assets/search.svg';

import IconStyled, { IconStyledProps } from './Icon.styled';

const SearchIcon = (props: IconStyledProps) => {
  return (
    <IconStyled className="icon" {...props}>
      <Search />
    </IconStyled>
  );
};

export default SearchIcon;
