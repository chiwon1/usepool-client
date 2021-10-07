import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './contexts/theme';

import Layout from './components/Layout';
import Pages from './Pages';
import AuthProvider from './contexts/AuthProvider';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <Pages />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
