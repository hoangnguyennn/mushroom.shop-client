import { FC } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default MainLayout;
