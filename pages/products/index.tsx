import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getCategoriesAction } from '@redux/reducers/category';
import { getProducts, getProductsAction } from '@redux/reducers/product';
import { getProductUnitsAction } from '@redux/reducers/productUnit';
import { initialStore } from '@redux/store';
import { productsPage } from '@configs/breadcrumb';
import i18n from '@locales/index';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';
import ProductList from '@features/ProductList';

const ProductDetailPage = () => {
  const { t } = useTranslation();
  const products = useSelector(getProducts());

  return (
    <MainLayout>
      <PageContent breadcrumb={productsPage()} title={t('Products')}>
        <ProductList products={products} />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const query = context.query;
  try {
    await dispatch(getProductsAction(query));
    await dispatch(getCategoriesAction(query));
    await dispatch(getProductUnitsAction(query));

    return {
      props: {
        initialReduxState: reduxStore.getState(),
        title: i18n.t('Products')
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

export default ProductDetailPage;
