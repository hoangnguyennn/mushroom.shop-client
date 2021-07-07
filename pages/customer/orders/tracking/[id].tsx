import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { myOrderPage } from '@configs/breadcrumb';
import i18n from '@locales/index';
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('My orders') }
  };
};

export default OrderTrackingPage;
