import React, { FC } from 'react';
import AppHeader from './AppHeader';
import ContentBox from './ContentBox';

const Layout: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <ContentBox>{children}</ContentBox>
    </>
  );
};

export default Layout;
