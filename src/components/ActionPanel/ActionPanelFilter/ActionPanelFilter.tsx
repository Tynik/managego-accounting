import React, { HTMLAttributes, PropsWithChildren } from 'react';

import ActionPanelFilterStyled from './ActionPanelFilter.styled';

type ActionPanelFilterProps = { label: string } & HTMLAttributes<never>;

const ActionPanelFilter = ({
  children,
  label,
  ...props
}: PropsWithChildren<ActionPanelFilterProps>) => {
  return (
    <ActionPanelFilterStyled {...props}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{label}</label>
      <div className="">{children}</div>
    </ActionPanelFilterStyled>
  );
};

export default ActionPanelFilter;
