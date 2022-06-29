import React from 'react';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '~/GlobalStyles';
import Container from '~/components/Container';
import Menu from '~/components/Menu/Menu';
import MenuItem from '~/components/Menu/MenuItem';
import DashboardIcon from '~/components/Icons/DashboardIcon';
import light from '~/themes/light';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Menu>
          <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
        </Menu>

        <main style={{ flexGrow: 1 }}>Reports</main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
