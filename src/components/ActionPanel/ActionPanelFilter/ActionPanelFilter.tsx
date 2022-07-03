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
      <span className="label">{label}</span>
      {children}
    </ActionPanelFilterStyled>
  );
};

export default ActionPanelFilter;
