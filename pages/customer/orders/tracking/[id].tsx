import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { initialStore } from '@redux/store';
import { myOrderPage } from '@configs/breadcrumb';
import { setIsDesktop } from '@redux/reducers/app';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import MyOrderTracking from '@features/MyOrderTracking';
import PageContent from '@components/PageContent';

const OrderTrackingPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={myOrderPage()} title={t('Order tracking')}>
        <MyOrderTracking />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setIsDesktop(isDesktop(secChUaMobile)));
  return {
    props: {
      initialReduxState: reduxStore.getState(),
      title: i18n.t('My orders')
    }
  };
};

export default OrderTrackingPage;
