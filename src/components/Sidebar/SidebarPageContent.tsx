import React, { HTMLAttributes, PropsWithChildren } from 'react';

import { Content } from '~/components';

const SidebarPageContent = ({ children, ...props }: PropsWithChildren<HTMLAttributes<never>>) => {
  return <Content {...props}>{children}</Content>;
};

export default SidebarPageContent;
