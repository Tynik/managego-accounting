import React from 'react';

import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  SidebarWrapper,
  SidebarContent,
  Sidebar,
} from '~/components';
import VendorsListContent from '~/pages/VendorsListContent';

const VendorsListPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="Vendors For:">
            <select />
          </ActionPanelFilter>
        </ActionPanelContent>
        <ActionPanelActions>
          <Button size="small" variant="outlined">
            Export
          </Button>
        </ActionPanelActions>
      </ActionPanel>

      <SidebarWrapper>
        <SidebarContent>
          <VendorsListContent />
        </SidebarContent>

        <Sidebar>Test</Sidebar>
      </SidebarWrapper>
    </>
  );
};

export default VendorsListPage;
