import React from 'react';
import { ThemeProvider } from 'styled-components';

import BarChart from '@/components/BarChart';
import { Container } from '@/components/Container.styled';
import LineChart from '@/components/LineChart';
import Sidebar from '@/components/Sidebar/Sidebar';
import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
