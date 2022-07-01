import React, { useContext } from 'react';

import { Button } from '~/components';
import { SidebarContext } from '~/components/Sidebar/SidebarWrapper';

const VendorsListContent = () => {
  const { onToggleSidebar } = useContext(SidebarContext);

  return <Button onClick={onToggleSidebar}>Add Vendor</Button>;
};

export default VendorsListContent;
