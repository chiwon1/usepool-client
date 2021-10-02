import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Layouts from './components/layouts';
import Pages from './pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layouts>
          <Pages />
        </Layouts>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
