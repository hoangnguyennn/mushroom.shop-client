import { FC, useEffect } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { updateCart } from '@redux/reducers/cart.reducer';

const MainLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateCart());
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
