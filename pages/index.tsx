import { GetStaticProps } from 'next';
import { fetchTrendingProducts } from '@redux/reducers/product.reducer';
import storeWrapper from '@redux/store';
import Home from '@features/Home';
import MainLayout from '@layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = storeWrapper.getStore();
  await store.dispatch(fetchTrendingProducts());

  return {
    props: { initialReduxState: store.getState() }
  };
};

export default HomePage;
