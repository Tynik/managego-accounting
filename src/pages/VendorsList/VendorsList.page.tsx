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
} from '~/components';
import { VendorsListContent } from '~/pages';
import Checkbox from '~/components/Form/Checkbox/Checkbox';

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

        <Sidebar title="Add Vendor">
          <Form title="Vendor Setup">
            <TextInput placeholder="Vendor Name" />

            <TextInput placeholder="Vendor Address" />

            <TextInput placeholder="Select Term (!!! Select)" />

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
