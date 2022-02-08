import React from 'react';
import { ThemeProvider } from 'styled-components';

import BarChart from './components/BarChart';
import { Container } from './components/Container.styled';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <BarChart />
      </Container>
    </ThemeProvider>
  );
}

export default App;
