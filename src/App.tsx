import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './contexts/theme';

import Layout from './components/Layout';
import Pages from './Pages';
import AuthProvider from './contexts/AuthProvider';
import { QueryClientProvider, QueryClient } from 'react-query';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Pages />
            </Layout>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
