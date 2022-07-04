import React from 'react';

import {
  Button,
  SidebarWrapper,
  SidebarPageContent,
  Sidebar,
  Form,
  TextInput,
  FormButtons,
  Checkbox,
  Select,
} from '~/components';
import { TransactionsPageContent } from '~/pages';

const TransactionsPage = () => {
  return (
    <SidebarWrapper>
      <SidebarPageContent>
        <TransactionsPageContent />
      </SidebarPageContent>

      <Sidebar title="Add Transactions">
        <Form title="Transaction Setup">
          <TextInput placeholder="Calendar !!!" fullWidth />

          <TextInput placeholder="Transaction Name" fullWidth />

          <TextInput placeholder="Enter Description" fullWidth multiline />

          <Select action="Select Type:" options={[]} placeholder="Select Type" fullWidth />

          <TextInput placeholder="Amount" fullWidth />
        </Form>
      </Sidebar>
    </SidebarWrapper>
  );
};

export default TransactionsPage;
