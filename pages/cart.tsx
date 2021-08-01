import PageContentLayout from '@components/PageContent';
import Cart from '@features/Cart';
import MainLayout from '@layouts/MainLayout';

const CartPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <Cart />
      </PageContentLayout>
    </MainLayout>
  );
};

export default CartPage;
