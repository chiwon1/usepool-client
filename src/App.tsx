import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Layout from './components/Layout';
import Pages from './Pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Pages />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
