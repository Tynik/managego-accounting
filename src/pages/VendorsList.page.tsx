import React from 'react';
import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  Content,
} from '~/components';

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

      <Content>
        <Button>Add Vendor</Button>
      </Content>
    </>
  );
};

export default VendorsListPage;
