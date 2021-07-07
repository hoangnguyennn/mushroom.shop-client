import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { cartPage } from '@configs/breadcrumb';
import { getPaymentMethodsAction } from '@redux/reducers/paymentMethod';
import { initialStore } from '@redux/store';
import Cart from '@features/Cart';
import i18n from '@locales/index';
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

export const getServerSideProps: GetServerSideProps = async () => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;
  await dispatch(getPaymentMethodsAction());

  return {
    props: { title: i18n.t('Cart'), initialReduxState: reduxStore.getState() }
  };
};

export default CartPage;
