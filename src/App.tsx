import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import GlobalStyles from '~/GlobalStyles';
import { Container, Main, Menu, MenuItem, MenuSubItem, TopBar } from '~/components';
import {
  DashboardIcon,
  BuildingIcon,
  StorageIcon,
  BankIcon,
  ReportsIcon,
  DollarIcon,
  SettingsIcon,
} from '~/icons';
import { ReportsPage } from '~/pages/ReportsPage';

import lightTheme from '~/themes/light';
import { PAGES } from '~/constants';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container>
        <Menu title="Accounting">
          <MenuItem icon={<DashboardIcon />} label="Dashboard">
            <MenuSubItem label="Property Management" icon={<BuildingIcon />}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <h6 onClick={() => navigate('/residents')}>Residents</h6>
              <h6>Transactions</h6>
              <h6>Entity/Buildings</h6>
            </MenuSubItem>
            <MenuSubItem label="Vendors/AP" icon={<StorageIcon />}>
              <h6>Vendors List</h6>
              <h6>Pay Bills</h6>
              <h6>Payroll</h6>
            </MenuSubItem>
            <MenuSubItem
              label="Banking/Accounting"
              icon={<BankIcon />}
              onClick={() => navigate('/banking')}
              active={location.pathname === '/banking'}
            />
            <MenuSubItem
              label="Reports"
              icon={<ReportsIcon />}
              onClick={() => navigate('/reports')}
              active={location.pathname === '/reports'}
            />
            <MenuSubItem
              label="Ledger"
              icon={<DollarIcon />}
              onClick={() => navigate('/ledger')}
              active={location.pathname === '/ledger'}
            />
            <MenuSubItem
              label="Setup"
              icon={<SettingsIcon />}
              onClick={() => navigate('/setup')}
              active={location.pathname === '/setup'}
            />
          </MenuItem>
        </Menu>

        <Main>
          <TopBar title={PAGES[location.pathname]?.title} />

          <Routes>
            <Route path="reports" element={<ReportsPage />} />
          </Routes>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
