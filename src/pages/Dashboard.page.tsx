import React from 'react';

import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  Content,
  Select,
} from '~/components';
import { DownloadIcon } from '~/icons';

const DashboardPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="Property:">
            <Select action="Select Input:" options={[]} placeholder="Input Title" />
          </ActionPanelFilter>

          <ActionPanelFilter label="Unit:">
            <Select
              action="Select Unit(s):"
              options={[]}
              placeholder="Unit Title"
              multiple
              search
            />
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
