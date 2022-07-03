import React from 'react';

import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  Content,
} from '~/components';
import { DownloadIcon } from '~/icons';

const DashboardPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="Property:">
            <select />
          </ActionPanelFilter>
          <ActionPanelFilter label="Unit:">
            <select />
          </ActionPanelFilter>

          <Button size="small" color="info" variant="text">
            Some button
          </Button>
        </ActionPanelContent>
        <ActionPanelActions>
          <Button size="small" variant="outlined">
            <DownloadIcon size="small" />
            Export
          </Button>
        </ActionPanelActions>
      </ActionPanel>

      <Content />
    </>
  );
};

export default DashboardPage;
