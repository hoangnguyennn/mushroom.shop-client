import { GetServerSideProps } from 'next';

import PageContentLayout from '@components/PageContent';
import MainLayout from '@layouts/MainLayout';

import IPageProps from '@interfaces/IPageProps';
import storeWrapper from '@redux/store';
import { fetchProducts } from '@redux/reducers/product.reducer';
import ProductList from '@features/ProductList';

const ProductPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <ProductList />
      </PageContentLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const store = storeWrapper.getStore();
  await store.dispatch(fetchProducts());

  return {
    props: {
      initialReduxState: store.getState()
    }
  };
};

export default ProductPage;
