import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { updateCartFromLocalStorage } from '@redux/reducers/cart';

const MainLayout: FC = ({ children }) => {
  const dispatch = useDispatch();
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
