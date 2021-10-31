import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';

import theme from './contexts/theme';
import AuthProvider from './contexts/AuthProvider';
import { LoadScript } from '@react-google-maps/api';

import Layout from './components/Layout';
import Pages from './Pages';
import { libraries } from './constants/map';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <LoadScript
              libraries={libraries}
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY!}
            >
              <Layout>
                <Pages />
              </Layout>
            </LoadScript>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
