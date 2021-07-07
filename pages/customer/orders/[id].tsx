import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { myOrderPage } from '@configs/breadcrumb';
import i18n from '@locales/index';
import MainLayout from '@layouts/MainLayout';
import MyOrderDetail from '@features/MyOrderDetail';
import PageContent from '@components/PageContent';

const MyOrderDetailPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={myOrderPage()} title={t('Order detail')}>
        <MyOrderDetail />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('My orders') }
  };
};

export default MyOrderDetailPage;
