import React from 'react';
import {
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  Button,
  TopBar,
} from '~/components';

export const ReportsPage = () => {
  return (
    <>
      <TopBar title="Reports" />

      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="View:">
            <select />
          </ActionPanelFilter>
          <ActionPanelFilter label="Building:">
            <select />
          </ActionPanelFilter>
          <ActionPanelFilter label="Date Range:">
            <select />
          </ActionPanelFilter>
        </ActionPanelContent>
        <ActionPanelActions>
          <Button>Export</Button>
        </ActionPanelActions>
      </ActionPanel>
    </>
  );
};
