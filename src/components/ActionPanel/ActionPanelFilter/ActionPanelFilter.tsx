import React, { HTMLAttributes, PropsWithChildren } from 'react';

import ActionPanelFilterStyled from '~/components/ActionPanel/ActionPanelFilter/ActionPanelFilter.styled';

type ActionPanelFilterProps = { label: string } & HTMLAttributes<any>;

const ActionPanelFilter = ({
  children,
  label,
  ...props
}: PropsWithChildren<ActionPanelFilterProps>) => {
  return (
    <ActionPanelFilterStyled {...props}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{label}</label>
      <div className="s">{children}</div>
    </ActionPanelFilterStyled>
  );
};

export default ActionPanelFilter;
