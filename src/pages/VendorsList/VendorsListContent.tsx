import React, { useContext } from 'react';

import { Button, SidebarWrapperContext } from '~/components';

const VendorsListContent = () => {
  const { toggleSidebar } = useContext(SidebarWrapperContext);

  return <Button onClick={toggleSidebar}>Add Vendor</Button>;
};

export default VendorsListContent;
