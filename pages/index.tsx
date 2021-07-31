import { GetServerSideProps } from 'next';

import MainLayout from '@layouts/MainLayout';
import Home from '@features/Home';

import IPageProps from '@interfaces/IPageProps';
import storeWrapper from '@redux/store';
import { fetchTrendingProducts } from '@redux/reducers/product.reducer';

const HomePage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const store = storeWrapper.getStore();
  await store.dispatch(fetchTrendingProducts());

  return {
    props: { initialReduxState: store.getState() }
  };
};

export default HomePage;
