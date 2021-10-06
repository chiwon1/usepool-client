import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './contexts/theme';

import Layout from './components/Layout';
import Pages from './Pages';
import AuthProvider from './contexts/AuthProvider';
import { initKakao } from './config/kakao';

const App: FC = () => {
  useEffect(() => {
    initKakao();
  }, []);

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
