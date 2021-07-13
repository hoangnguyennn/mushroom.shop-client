import { FC, useEffect } from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { updateCartFromLocalStorage } from '@redux/reducers/cart';
import { useAppDispatch } from '@hooks/useAppDispatch';

const MainLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateCartFromLocalStorage());
  }, []);

  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default MainLayout;
