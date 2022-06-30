import React from 'react';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '~/GlobalStyles';
import Container from '~/components/Container';
import DashboardIcon from '~/components/Icons/DashboardIcon';
import { Menu, MenuItem, MenuSubItem } from '~/components/Menu';
import light from '~/themes/light';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Menu title="Accounting">
          <MenuItem icon={<DashboardIcon />} label="Dashboard">
            <MenuSubItem label="Property Management" icon={<DashboardIcon />}>
              <h6>Residents</h6>
              <h6>Transactions</h6>
              <h6>Entity/Buildings</h6>
            </MenuSubItem>
            <MenuSubItem label="Vendors/AP" icon={<DashboardIcon />}>
              <h6>Vendors List</h6>
              <h6>Pay Bills</h6>
              <h6>Payroll</h6>
            </MenuSubItem>
            <MenuSubItem label="Banking/Accounting" icon={<DashboardIcon />} />
            <MenuSubItem label="Reports" icon={<DashboardIcon />} />
            <MenuSubItem label="Ledger" icon={<DashboardIcon />} />
            <MenuSubItem label="Setup" icon={<DashboardIcon />} />
          </MenuItem>
        </Menu>

        <main style={{ flexGrow: 1 }}>Reports</main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
