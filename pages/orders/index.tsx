import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { getToken } from '@redux/reducers/auth';
import { initialStore } from '@redux/store';
import { isVariant } from '@helpers/checkTypes';
import { orderNotificationPage } from '@configs/breadcrumb';
import { PATH_NAME } from '@configs/pathName';
import { setDesktopAction } from '@redux/reducers/app';
import { Variant } from '@interfaces/types';
import Alert from '@components/core/Alert';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';

const OrderSuccessPage = () => {
  const { t } = useTranslation();
  const token = useSelector(getToken());
  const router = useRouter();
  const { status } = router.query;

  return (
    <MainLayout>
      <PageContent breadcrumb={orderNotificationPage()} title={t('Order')}>
        <Alert
          variant={
            isVariant(status as string) ? (status as Variant) : undefined
          }
        >
          Đặt hàng thành công{' '}
          {token ? (
            <Link href={PATH_NAME.MY_ORDER}>{t('My orders')}</Link>
          ) : (
            <Link href={PATH_NAME.HOME}>{t('Home')}</Link>
          )}
        </Alert>
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
      title: i18n.t('Đặt hàng thành công')
    }
  };
};

export default OrderSuccessPage;
