import React, { useContext } from 'react';

import { Button, SidebarWrapperContext } from '~/components';

const TransactionsPageContent = () => {
  const { toggleSidebar } = useContext(SidebarWrapperContext);

  return <Button onClick={toggleSidebar}>Add Transaction</Button>;
};

export default TransactionsPageContent;
