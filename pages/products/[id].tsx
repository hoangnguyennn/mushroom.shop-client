import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import { getProductByIdAction, getProduct } from '@redux/reducers/product';
import { initialStore } from '@redux/store';
import { productPage } from '@configs/breadcrumb';
import { setDesktopAction } from '@redux/reducers/app';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';
import ProductSummary from '@features/ProductSummary';

import 'react-quill/dist/quill.snow.css';

const ProductDetailPage = () => {
  const product = useSelector(getProduct());

  return (
    <MainLayout>
      <PageContent
        breadcrumb={productPage(product.name, product.id as string)}
        title={product.name}
      >
        <ProductSummary product={product} />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;

  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setDesktopAction(isDesktop(secChUaMobile)));

  try {
    await dispatch(getProductByIdAction(id as string));

    return {
      props: {
        initialReduxState: reduxStore.getState(),
        title: getProduct()(reduxStore.getState())?.name
      }
    };
  } catch (err) {
    console.log(err);

    return {
      notFound: true
    };
  }
};

export default ProductDetailPage;
