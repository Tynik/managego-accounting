import React from 'react';

import IconStyled from '~/components/Icons/Icon.styled';
import Apps from '~/assets/apps.svg';

const AppsIcon = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <IconStyled {...props}>
      <Apps />
    </IconStyled>
  );
};

export default AppsIcon;
