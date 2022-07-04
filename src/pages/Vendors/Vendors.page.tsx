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
import { VendorsPageContent } from '~/pages';
import { DownloadIcon } from '~/icons';

const VendorsPage = () => {
  return (
    <>
      <ActionPanel>
        <ActionPanelContent>
          <ActionPanelFilter label="Vendors For:">
            <Select
              action="Select Building(s):"
              options={[]}
              placeholder="All Buildings"
              multiple
            />
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
          <VendorsPageContent />
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

export default VendorsPage;
