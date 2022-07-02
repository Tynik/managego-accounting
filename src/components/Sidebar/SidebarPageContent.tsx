import React, { PropsWithChildren } from 'react';

import { Content } from '~/components';

const SidebarPageContent = ({ children, ...props }: PropsWithChildren<any>) => {
  return <Content {...props}>{children}</Content>;
};

export default SidebarPageContent;
