import React from 'react';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '~/GlobalStyles';
import Container from '~/components/Container';
import { TopBar } from '~/components/TopBar';
import {
  DashboardIcon,
  BuildingIcon,
  StorageIcon,
  BankIcon,
  ReportsIcon,
  DollarIcon,
  SettingsIcon,
} from '~/components/Icons';
import { Menu, MenuItem, MenuSubItem } from '~/components/Menu';

import lightTheme from '~/themes/light';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container>
        <Menu title="Accounting">
          <MenuItem icon={<DashboardIcon />} label="Dashboard">
            <MenuSubItem label="Property Management" icon={<BuildingIcon />}>
              <h6>Residents</h6>
              <h6>Transactions</h6>
              <h6>Entity/Buildings</h6>
            </MenuSubItem>
            <MenuSubItem label="Vendors/AP" icon={<StorageIcon />}>
              <h6>Vendors List</h6>
              <h6>Pay Bills</h6>
              <h6>Payroll</h6>
            </MenuSubItem>
            <MenuSubItem label="Banking/Accounting" icon={<BankIcon />} />
            <MenuSubItem label="Reports" icon={<ReportsIcon />} />
            <MenuSubItem label="Ledger" icon={<DollarIcon />} />
            <MenuSubItem label="Setup" icon={<SettingsIcon />} />
          </MenuItem>
        </Menu>

        <main style={{ flexGrow: 1 }}>
          <TopBar title="Reports" />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
