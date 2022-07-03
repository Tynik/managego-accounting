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
  Form,
  TextInput,
  FormButtons,
  Checkbox,
  Select,
} from '~/components';
import { VendorsListContent } from '~/pages';
import { DownloadIcon } from '~/icons';

const VendorsListPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="Vendors For:">
            <Select action="Select Building(s):" options={[]} placeholder="All Buildings" />
          </ActionPanelFilter>
        </ActionPanelContent>
        <ActionPanelActions>
          <Button size="small" variant="outlined">
            <DownloadIcon size="small" />
            Export
          </Button>
        </ActionPanelActions>
      </ActionPanel>

      <SidebarWrapper>
        <SidebarPageContent>
          <VendorsListContent />
        </SidebarPageContent>

        <Sidebar title="Add Vendor">
          <Form title="Vendor Setup">
            <TextInput placeholder="Vendor Name" fullWidth />

            <TextInput placeholder="Vendor Address" fullWidth />

            <Select action="Select Term:" options={[]} placeholder="Select Term" fullWidth />

            <Checkbox label="Split balances between Residents" />

            <FormButtons>
              <Button color="info" variant="outlined" size="large">
                Connect Vendor
              </Button>
            </FormButtons>
          </Form>
        </Sidebar>
      </SidebarWrapper>
    </>
  );
};

export default VendorsListPage;
