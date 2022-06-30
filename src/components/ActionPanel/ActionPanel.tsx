import React, { HTMLAttributes, PropsWithChildren } from 'react';

import ActionPanelStyled from '~/components/ActionPanel/ActionPanel.styled';

const ActionPanel = ({ children, title, ...props }: PropsWithChildren<HTMLAttributes<any>>) => {
  return <ActionPanelStyled {...props}>{children}</ActionPanelStyled>;
};

export default ActionPanel;
