import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchCategories, getCategoryBySlug } from '@redux/reducers/category';
import {
  fetchProductsByCategorySlug,
  getProductsByCategorySlug
} from '@redux/reducers/product';
import { fetchProductUnits } from '@redux/reducers/productUnit';
import { initialStore } from '@redux/store';
import { productsByCategoryPage } from '@configs/breadcrumb';
import { setIsDesktop } from '@redux/reducers/app';
import isDesktop from '@helpers/isDesktop';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';
import ProductList from '@features/ProductList';

const CategoryPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const category = router.query.category as string;

  const products = useSelector(getProductsByCategorySlug(category));
  const categoryInfo = useSelector(getCategoryBySlug(category));

  return (
    <MainLayout>
      <PageContent
        breadcrumb={productsByCategoryPage(categoryInfo)}
        title={t(categoryInfo?.name || 'Products')}
      >
        <ProductList
          title={t(categoryInfo?.name || 'Products')}
          products={products}
        />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setIsDesktop(isDesktop(secChUaMobile)));

  const category = context.query.category as string;
  const query = context.query;
  try {
    await dispatch(fetchProductsByCategorySlug(category, query));
    await dispatch(fetchCategories(query));
    await dispatch(fetchProductUnits({ slug: category, ...query }));

    const categoryInfo = getCategoryBySlug(category)(reduxStore.getState());

    return {
      props: {
        initialReduxState: reduxStore.getState(),
        title: categoryInfo?.name
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};

export default CategoryPage;
