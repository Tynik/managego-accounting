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
  Select,
} from '~/components';
import { DownloadIcon } from '~/icons';

const ReportsPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="View:">
            <Select
              action="Select Report:"
              options={['Profit & Loss', 'Deliquency', 'Unit Occupancy', 'Expenses by Vendor']}
              placeholder="Profit & Loss"
            />
          </ActionPanelFilter>
          <ActionPanelFilter label="Building:">
            <Select action="Select Building(s):" options={[]} placeholder="All Buildings" />
          </ActionPanelFilter>
          <ActionPanelFilter label="Date Range:" />
        </ActionPanelContent>
        <ActionPanelActions>
          <Button size="small" variant="outlined">
            <DownloadIcon size="small" />
            Export
          </Button>
        </ActionPanelActions>
      </ActionPanel>

      <Content>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell textAlign="right">Jan-21</TableCell>
              <TableCell textAlign="right">Feb-21</TableCell>
              <TableCell textAlign="right">Mar-21</TableCell>
              <TableCell textAlign="right">Apr-21</TableCell>
              <TableCell textAlign="right">Jun-21</TableCell>
              <TableCell textAlign="right">Jul-21</TableCell>
              <TableCell textAlign="right">Aug-21</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Income</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={1}>Operating</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={2}>Rent Income</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={1}>Total Income from Operating</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={1}>Financial</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={2}>Rent Income</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell level={1}>Total Income from Operating</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
              <TableCell>$120,000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Income</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
              <TableCell>$240,000.00</TableCell>
            </TableRow>
          </TableBody>
          <tfoot />
        </Table>
      </Content>
    </>
  );
};

export default ReportsPage;
