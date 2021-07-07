import { GetServerSideProps } from 'next';

import { getTrendingProductsAction } from '@redux/reducers/product';
import { initialStore } from '@redux/store';
import Banner from '@components/Banner';
import bannerBg from '@assets/images/banner.jpg';
import Home from '@features/Home';
import i18n from '@locales/index';
import MainLayout from '@layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner background={bannerBg} />
      <Home />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  await dispatch(getTrendingProductsAction());

  return {
    props: { initialReduxState: reduxStore.getState(), title: i18n.t('Home') }
  };
};

export default HomePage;
