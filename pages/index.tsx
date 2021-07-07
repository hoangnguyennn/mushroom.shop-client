import { GetServerSideProps } from 'next';

import { getTrendingProductsAction } from '@redux/reducers/product';
import { initialStore } from '@redux/store';
import { setDesktopAction } from '@redux/reducers/app';
import Banner from '@components/Banner';
import bannerBg from '@assets/images/banner.jpg';
import Home from '@features/Home';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner background={bannerBg} />
      <Home />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setDesktopAction(isDesktop(secChUaMobile)));
  await dispatch(getTrendingProductsAction());

  return {
    props: { initialReduxState: reduxStore.getState(), title: i18n.t('Home') }
  };
};

export default HomePage;
