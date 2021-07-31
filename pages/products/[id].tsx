import PageContentLayout from '@components/PageContent';
import ProductSummary from '@features/ProductSummary';
import IPageProps from '@interfaces/IPageProps';
import MainLayout from '@layouts/MainLayout';
import { fetchProductById } from '@redux/reducers/product.reducer';
import storeWrapper from '@redux/store';
import { GetServerSideProps } from 'next';

const ProductPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <ProductSummary />
      </PageContentLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async ({
  params
}) => {
  const id = params.id instanceof Array ? params.id[0] : params.id;

  const store = storeWrapper.getStore();
  await store.dispatch(fetchProductById(id));

  return {
    props: { initialReduxState: store.getState() }
  };
};

export default ProductPage;
