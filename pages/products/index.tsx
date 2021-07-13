import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchCategories } from '@redux/reducers/category';
import { getProducts, fetchProducts } from '@redux/reducers/product';
import { fetchProductUnits } from '@redux/reducers/productUnit';
import { initialStore } from '@redux/store';
import { productsPage } from '@configs/breadcrumb';
import { setIsDesktop } from '@redux/reducers/app';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
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

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setIsDesktop(isDesktop(secChUaMobile)));

  const query = context.query;
  try {
    await dispatch(fetchProducts(query)).unwrap();
    await dispatch(fetchCategories(query)).unwrap();
    await dispatch(fetchProductUnits(query)).unwrap();

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
