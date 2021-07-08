import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { cartPage } from '@configs/breadcrumb';
import { fetchPaymentMethods } from '@redux/reducers/paymentMethod';
import { initialStore } from '@redux/store';
import { setIsDesktop } from '@redux/reducers/app';
import Cart from '@features/Cart';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';

const CartPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={cartPage()} title={t('Cart')}>
        <Cart />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setIsDesktop(isDesktop(secChUaMobile)));
  await dispatch(fetchPaymentMethods());

  return {
    props: { title: i18n.t('Cart'), initialReduxState: reduxStore.getState() }
  };
};

export default CartPage;
