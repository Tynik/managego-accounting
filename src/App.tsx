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
            <MenuSubItem label="Property Management" icon={<DashboardIcon />} />
            <MenuSubItem label="Vendors" icon={<DashboardIcon />} />
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
