import React from 'react';

import IconStyled from '~/icons/Icon.styled';
import Search from '~/assets/search.svg';

const SearchIcon = props => {
  return (
    <IconStyled className="icon" {...props}>
      <Search />
    </IconStyled>
  );
};

export default SearchIcon;
