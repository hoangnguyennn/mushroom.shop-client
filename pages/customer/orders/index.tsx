import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { initialStore } from '@redux/store';
import { myOrderPage } from '@configs/breadcrumb';
import { setDesktopAction } from '@redux/reducers/app';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import MyOrder from '@features/MyOrder';
import PageContent from '@components/PageContent';

const MyOrderPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={myOrderPage()} title={t('My orders')}>
        <MyOrder />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setDesktopAction(isDesktop(secChUaMobile)));
  return {
    props: {
      initialReduxState: reduxStore.getState(),
      title: i18n.t('My orders')
    }
  };
};

export default MyOrderPage;
