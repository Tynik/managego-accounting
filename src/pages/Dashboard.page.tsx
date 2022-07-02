import React from 'react';
import {
  Button,
  ActionPanel,
  ActionPanelActions,
  ActionPanelContent,
  ActionPanelFilter,
  Content,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '~/components';

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
            Export
          </Button>
        </ActionPanelActions>
      </ActionPanel>

      <Content />
    </>
  );
};

export default DashboardPage;
