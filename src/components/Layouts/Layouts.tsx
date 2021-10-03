import React, { FC } from 'react';
import AppHeader from './AppHeader';
import ContentBox from './ContentBox';

const Layouts: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <ContentBox>{children}</ContentBox>
    </>
  );
};

export default Layouts;
