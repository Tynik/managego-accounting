import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';

import GlobalStyles from '~/GlobalStyles';
import {
  Container,
  TopBar,
  Main,
  Menu,
  MenuItems,
  MenuItem,
  MenuSubItem,
  MenuFooter,
  ManageGoLogo,
  MenuWrapper,
} from '~/components';
import {
  DashboardIcon,
  BuildingIcon,
  StorageIcon,
  BankIcon,
  ReportsIcon,
  DollarIcon,
  SettingsIcon,
} from '~/icons';
import { DashboardPage, ReportsPage, VendorsList } from '~/pages';

import lightTheme from '~/themes/light';
import { PAGES } from '~/constants';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container>
        <MenuWrapper>
          <Menu title="Accounting">
            <MenuItems>
              <MenuItem
                component={<Link to="/" />}
                active={location.pathname === '/'}
                icon={<DashboardIcon />}
                label="Dashboard"
              >
                <MenuSubItem label="Property Management" icon={<BuildingIcon />}>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                  <h6 onClick={() => navigate('/residents')}>Residents</h6>
                  <h6>Transactions</h6>
                  <h6>Entity/Buildings</h6>
                </MenuSubItem>

                <MenuSubItem label="Vendors/AP" icon={<StorageIcon />}>
                  <h6 onClick={() => navigate('/vendors-list')}>Vendors List</h6>
                  <h6>Pay Bills</h6>
                  <h6>Payroll</h6>
                </MenuSubItem>

                <MenuSubItem
                  label="Banking/Accounting"
                  icon={<BankIcon />}
                  component={<Link to="/banking" />}
                  active={location.pathname === '/banking'}
                />

                <MenuSubItem
                  label="Reports"
                  icon={<ReportsIcon />}
                  component={<Link to="/reports" />}
                  active={location.pathname === '/reports'}
                />

                <MenuSubItem
                  label="Ledger"
                  icon={<DollarIcon />}
                  component={<Link to="/ledger" />}
                  active={location.pathname === '/ledger'}
                />

                <MenuSubItem
                  label="Setup"
                  icon={<SettingsIcon />}
                  component={<Link to="/setup" />}
                  active={location.pathname === '/setup'}
                />
              </MenuItem>
            </MenuItems>

            <MenuFooter>
              <span>powered by</span>
              <ManageGoLogo />
            </MenuFooter>
          </Menu>

          <Main>
            <TopBar title={PAGES[location.pathname]?.title} />

            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="vendors-list" element={<VendorsList />} />
            </Routes>
          </Main>
        </MenuWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
