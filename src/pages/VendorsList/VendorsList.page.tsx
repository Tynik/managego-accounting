import React from 'react';

import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  SidebarWrapper,
  SidebarPageContent,
  Sidebar,
} from '~/components';
import { VendorsListContent } from '~/pages';

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
        <SidebarPageContent>
          <VendorsListContent />
        </SidebarPageContent>

        <Sidebar title="Add Vendor" />
      </SidebarWrapper>
    </>
  );
};

export default VendorsListPage;
